import { Map, ControlOptions, Evented } from 'leaflet';
export interface SearchAddressOptions extends ControlOptions {
    query?: string;
    selectedCountry?: string;
    placeholder?: string;
}
export declare class SearchAddress extends Evented {
    private _map;
    private _container;
    private options;
    private token?;
    private queryInput;
    private resultContainer;
    private countriesDropdownContainer;
    constructor(map: Map, container: HTMLElement, options?: SearchAddressOptions);
    private _init;
    private _bindEvents;
    private _onEnterKeyPressed;
    private _fill;
    private _search;
    private _selectAddress;
    private _removeDiacritics;
}
