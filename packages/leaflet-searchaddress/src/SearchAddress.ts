import * as L from "leaflet";
import { Api } from "@locatienet/api-client";

export interface SearchAddressOptions extends L.ControlOptions {
    query?: string;
    address?: string;
    selectedCountry?: string;
    placeholder?: string;
    language?: string;
}

export class SearchAddress extends L.Evented {
    private _map: L.Map;
    private _container: HTMLElement;
    private options: SearchAddressOptions;
    private token?: number;
    private static countries: any[] = [];

    constructor(map: L.Map, container: HTMLElement, options: SearchAddressOptions = {}) {
        super();
        this._map = map;
        this._container = container;
        this.options = {
            //selectedCountry: '',
            placeholder: 'Zoek adres',
            language: 'nl',
            ...options
        };
        this._init();
    }

    private _init() {
        L.DomEvent.disableClickPropagation(this._container);
        L.DomEvent.disableScrollPropagation(this._container);
  
        // --- Create search bar ---
        const searchBar = document.createElement('div');
        searchBar.className = 'searchaddress-form p-0 w-100';
        searchBar.innerHTML = `

            <div class="input-group d-flex justify-content-start">
                <input id="searchaddress-query" type="text" class="form-control rounded-0"
                       placeholder="${this.options.placeholder}" data-country="${this.options.selectedCountry}" />
                
            </div>
            <div id="searchaddress-result" class="position-absolute list-group mt-1 w-100 pe-3 shadow" style="display:none;"></div>
            
        `;
        this._container.appendChild(searchBar);

        // --- Load countries ---
        // Api.countries().then(data => {
        //     SearchAddress.countries = data;
        //     this._renderCountries();
        // });

        this._bindEvents();

        if (this.options.query) {
            (document.getElementById('searchaddress-query') as HTMLInputElement).value = this.options.query;
            this._search();
        }
    }

    private _renderCountries() {
        const self = this;
        const dropdown = document.getElementById('searchaddress-countries');
        if (!dropdown) return;

        dropdown.innerHTML = '';
        const ul = document.createElement('ul');
        ul.className = 'dropdown-menu dropdown-menu-end';
        ul.style.maxHeight = '300px';
        ul.style.overflowY = 'auto';

        SearchAddress.countries.forEach(c => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'dropdown-item';
            a.href = '#';
            a.dataset.country = c.iso2;
            a.textContent = c.lang[self.options.language || 'nl'];
            li.appendChild(a);
            ul.appendChild(li);
        });

        dropdown.appendChild(ul);
    }

    private _bindEvents() {
        const input = this._container.querySelector<HTMLInputElement>('#searchaddress-query');
        if (!input) return;

        input.addEventListener('keyup', (e: KeyboardEvent) => {
            const query = (input.value || '').toString();
            if (query.length > 1) this._search();
            //if (e.key === 'Enter') this._onEnterKeyPressed();
        });

        const dropdown = this._container.querySelector('#searchaddress-countries');
        dropdown?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && target.dataset.country) {
                this.options.selectedCountry = target.dataset.country;
                this._search();
            }
        });

        const resultContainer = this._container.querySelector('#searchaddress-result');
        resultContainer?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.dataset.address) {
                //e.preventDefault();
                this._selectAddress(JSON.parse(target.dataset.address));
            }
        });

        input.addEventListener('focus', () => {
            const res = this._container.querySelector('#searchaddress-result') as HTMLElement;
            if (res) res.style.display = 'block';
        });

        input.addEventListener('blur', () => {
            setTimeout(() => {
                const res = this._container.querySelector('#searchaddress-result') as HTMLElement;
                if (res) res.style.display = 'none';
            }, 100);
        });
    }


    private _onEnterKeyPressed() {
        const resultContainer = document.getElementById('searchaddress-result');
        if (!resultContainer) return;

        const activeItem = resultContainer.querySelector<HTMLAnchorElement>('.searchaddress-item.active');
        if (activeItem && activeItem.dataset.address) {
            this._selectAddress(JSON.parse(activeItem.dataset.address));
        }
    }


    private _search() {
        if (this.token) clearTimeout(this.token);
        const input = document.getElementById('searchaddress-query') as HTMLInputElement;
        const query = (input?.value || '').toString();

        this.token = window.setTimeout(() => {
            Api.locateByText(query, this.options.selectedCountry || '', { minimalResultScore: 0, language: this.options.language, numResults: 10 }).then(data => this._fill(data));
        }, 100);
    }

    private _fill(data: any[]) {
        const dropdown = document.getElementById('searchaddress-result');
        if (!dropdown) return;

        dropdown.innerHTML = '';
        data.forEach((v, i) => {
            const a = document.createElement('a');
            a.className = `searchaddress-item list-group-item`; //  ${i === 0 ? 'active' : ''}
            a.href = '#';
            a.dataset.address = JSON.stringify(v);
            a.textContent = v.properties.description;
            dropdown.appendChild(a);
        });
        dropdown.style.display = data.length ? 'block' : 'none';
    }

    private _selectAddress(address: any) {
        const input = document.getElementById('searchaddress-query') as HTMLInputElement;
        if (!input) return;

        input.value = address.properties.description || address;
        const dropdown = document.getElementById('searchaddress-result');
        if (dropdown) dropdown.style.display = 'none';

        this.fire('address', { address });
    }
}