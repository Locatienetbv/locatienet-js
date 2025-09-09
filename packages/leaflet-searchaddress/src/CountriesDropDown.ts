import { Country, Api } from "@locatienet/api-client";
interface CountryOption {
  code: string;
  name: string;
}

export type CountrySelectCallback = (countryCode: string) => void;

export interface CountriesDropDownOptions {
  selectedCountry?: string;
  language?: string;
  onSelect: CountrySelectCallback;
}

export class CountriesDropDown {
  private container: HTMLElement;
  private options: CountriesDropDownOptions;
  private countries: Country[] = [];

  constructor(container: HTMLElement, options: CountriesDropDownOptions) {
    this.container = container;
    this.options = options;

    this._loadCountries();
    this._attachClickHandler();
  }

  private async _loadCountries() {
    try {
      this.countries = await Api.countries();
      this._render();
    } catch (err) {
      console.error("Failed to load countries:", err);
    }
  }

  private _render() {
    const predefined: CountryOption[] = [
      { code: 'NL', name: 'Nederland' },
      { code: 'BE', name: 'België' },
      { code: 'DE', name: 'Duitsland' },
      { code: 'FR', name: 'Frankrijk' },
    ];

    // clear container
    this.container.innerHTML = `
      <button class="btn btn-light btn-sm bg-transparent dropdown-toggle border-0" 
              type="button"
              data-bs-toggle="dropdown" 
              data-bs-display="static" 
              aria-expanded="false" 
              tabindex="1">
        <span class="flag flag-${(this.options.selectedCountry ?? 'NL').toLowerCase()} d-inline-flex align-middle"></span>
      </button>
    `;

    const ul = document.createElement('ul');
    ul.className = 'dropdown-menu dropdown-menu-end';
    ul.role = 'menu';
    ul.style.maxHeight = '300px';
    ul.style.overflowY = 'auto';
    ul.style.overflowX = 'hidden';
    ul.style.zIndex = '9999';

    [...predefined, ...this.countries.map(c => ({ code: c.iso2, name: c.lang?.nl ?? '' }))]
      .forEach((c, i) => {
        if (i === predefined.length) {
          const divider = document.createElement('li');
          divider.innerHTML = '<hr class="dropdown-divider">';
          ul.appendChild(divider);
        }
        const li = document.createElement('li');
        li.innerHTML = `
          <a class="dropdown-item" href="#" data-country="${c.code}">
            <div class="flag flag-${c.code?.toLowerCase()} me-1 d-inline-flex align-middle"></div>${c.name}
          </a>
        `;
        ul.appendChild(li);
      });

    this.container.appendChild(ul);

    
  }

  private _attachClickHandler() {
    this.container.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('a[data-country]') as HTMLElement;
      if (!target) return;
      e.preventDefault();
      const newCountry = target.dataset.country!;
      this._updateFlag(newCountry);
      this.options.onSelect(newCountry);
    });
  }

  private _updateFlag(newCountry: string) {
    const span = this.container.querySelector('span');
    if (span && this.options.selectedCountry) {
      span.classList.remove(`flag-${this.options.selectedCountry.toLowerCase()}`);
    }
    if (span) {
      span.classList.add(`flag-${newCountry.toLowerCase()}`);
    }
    this.options.selectedCountry = newCountry;
  }
}
