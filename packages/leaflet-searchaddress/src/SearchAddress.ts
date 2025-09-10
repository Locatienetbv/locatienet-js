import L, { Map, ControlOptions, Evented } from 'leaflet';
import { CountriesDropDown, CountriesDropDownOptions } from './CountriesDropDown';
import { Api } from '@locatienet/api-client';
import { Dropdown, Tab }  from 'bootstrap';

const idSuffix : string = "11aakc"

export interface SearchAddressOptions extends ControlOptions{
  query?: string;
  selectedCountry?: string;
  placeholder?: string;
}

export class SearchAddress extends Evented {
  private _map: Map;
  private _container: HTMLElement;
  private options: SearchAddressOptions;
  private token?: number;

  private queryInput!: HTMLInputElement;
  private resultContainer!: HTMLElement;
  private countriesDropdownContainer!: HTMLElement;

  constructor(map: Map, container: HTMLElement, options: SearchAddressOptions = {}) {
    super();
    L.setOptions(this, options);
    this._map = map;
    this._container = container;
    this.options = {
      query: '',
      selectedCountry: 'NL',
      placeholder: 'Zoek adres',
      ...options,
    };
    this._init();
  }

  private _init() {
    if (L.DomEvent) {
      L.DomEvent.disableClickPropagation(this._container);
      L.DomEvent.disableScrollPropagation(this._container);
    }


    // Build search bar
    this._container.innerHTML = `
      <div class="address-form form-group">
        <div class="input-group d-flex m-1">
          <input id="address-query" type="text" class="address-input form-control rounded-2 geocomplete"
                 autofocus autocomplete="off" tabindex="0"
                 placeholder="${this.options.placeholder || ''}" 
                 value="${this.options.query}" />
          <div id="address-countries" class="countries dropdown btn-group input-text-group"></div>
        </div>
        
        <div id="address-result" class="position-absolute list-group mt-1 w-100 shadow"></div>
        
      </div>
    `;

    this.queryInput = this._container.querySelector('#address-query') as HTMLInputElement;
    this.resultContainer = this._container.querySelector('#address-result') as HTMLElement;
    
    new Tab(this.resultContainer)

    this.countriesDropdownContainer = this._container.querySelector('#address-countries') as HTMLElement;
    new Dropdown(this.countriesDropdownContainer)

    // Initialize CountriesDropDown
    new CountriesDropDown(this.countriesDropdownContainer, {
      selectedCountry: this.options.selectedCountry,
      onSelect: (newCountry) => {
        this.options.selectedCountry = newCountry;

        // Optionally fit map to country bbox if available
        // const bbox = ... get from CountriesDropDown if you added bbox support
        // if (bbox) this._map.fitBounds([[bbox.top, bbox.left], [bbox.bottom, bbox.right]]);

        this._search();
      },
    } as CountriesDropDownOptions);

    this._bindEvents();

    if (this.options.query) {
      this.queryInput.value = this.options.query;
      this._search();
    }

  }

  private _bindEvents() {
    // Key events
    this.queryInput.addEventListener('keyup', (e: KeyboardEvent) => {
      const key = e.which || e.keyCode;
      const active = this.resultContainer.querySelector('.address-item.active') as HTMLElement;

      if (key === 40 && active?.nextElementSibling) { // down
        active.classList.remove('active');
        (active.nextElementSibling as HTMLElement).classList.add('active');
        e.preventDefault();
        return;
      }
      if (key === 38 && active?.previousElementSibling) { // up
        active.classList.remove('active');
        (active.previousElementSibling as HTMLElement).classList.add('active');
        e.preventDefault();
        return;
      }
      if ([16, 36].includes(key)) return;

      this.resultContainer.style.display = 'none';

      if (key === 13) this._onEnterKeyPressed();
      if ([13, 16, 46].includes(key)) {
        if (key === 46) this.fire('clear');
        return;
      }

      const query = this.queryInput.value;
      if (!isNaN(Number(query)) || query.length < 2) return;

      this._search();
    });

    // Focus / blur
    this.queryInput.addEventListener('focus', () => setTimeout(() => this.resultContainer.style.display = 'block', 100));
    this.queryInput.addEventListener('blur', () => setTimeout(() => this.resultContainer.style.display = 'none', 100));

    // Click on address items (delegated)
    this.resultContainer.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.address-item') as HTMLElement;
      if (!target) return;
      e.preventDefault();
      const address = JSON.parse(target.dataset.address!);
      this._selectAddress(address);
    });
  }

  private _onEnterKeyPressed() {
    const active = this.resultContainer.querySelector('.address-item.active') as HTMLElement;
    if (active?.dataset.address) {
      this._selectAddress(JSON.parse(active.dataset.address));
    }
  }

  private _fill(data: any[]) {
    this.resultContainer.innerHTML = '';
    if (!data || data.length === 0) return;

    data.forEach((v, i) => {
      const a = document.createElement('a');
      a.className = `address-item list-group-item text-wrap ${i === 0 ? 'active' : ''}`;
      a.href = '#';
      a.dataset.address = JSON.stringify(v);
      a.textContent = this._removeDiacritics(v.properties.description);

        // Set active class on mouseover
        a.addEventListener('mouseenter', () => {
        // remove active from all siblings
        this.resultContainer.querySelectorAll('.address-item.active').forEach(el => el.classList.remove('active'));
        a.classList.add('active');
        });

      this.resultContainer.appendChild(a);
    });

    this.resultContainer.style.display = 'block';
    
  }

  private _search() {
    if (this.token) clearTimeout(this.token);
    const query = this.queryInput.value;
    this.token = window.setTimeout(() => {
      Api.locateByText(query, this.options.selectedCountry || 'NL', { minimalResultScore: 0}).then((data) => this._fill(data));
    }, 100);
  }

  private _selectAddress(address: GeoJSON.Feature) {
    if (typeof address === 'string') address = new (window as any).Address(address);
    this.resultContainer.style.display = 'none';
    this.queryInput.value = address.properties?.description;
    this.fire('address', { query: this.queryInput.value, address });
  }

  private _removeDiacritics(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
