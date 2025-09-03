import * as L from "leaflet";
export interface SearchAddressOptions extends L.ControlOptions {
    query?: string;
    address?: string;
    selectedCountry?: string;
    placeholder?: string;
    language?: string;
}
export declare class SearchAddress extends L.Evented {
    private _map;
    private _container;
    private options;
    private token?;
    private static countries;
    constructor(map: L.Map, container: HTMLElement, options?: SearchAddressOptions);
    private _init;
    private _renderCountries;
    private _bindEvents;
    private _onEnterKeyPressed;
    private _search;
    private _fill;
    private _selectAddress;
}
