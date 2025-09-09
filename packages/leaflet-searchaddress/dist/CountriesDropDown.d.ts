export type CountrySelectCallback = (countryCode: string) => void;
export interface CountriesDropDownOptions {
    selectedCountry?: string;
    language?: string;
    onSelect: CountrySelectCallback;
}
export declare class CountriesDropDown {
    private container;
    private options;
    private countries;
    constructor(container: HTMLElement, options: CountriesDropDownOptions);
    private _loadCountries;
    private _render;
    private _attachClickHandler;
    private _updateFlag;
}
