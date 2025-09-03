import * as L from "leaflet";
import { SearchAddressOptions } from "./SearchAddress";
export declare class SearchAddressControl extends L.Control {
    private _map;
    private _container;
    private _searchaddress;
    constructor(options?: SearchAddressOptions);
    onAdd(map: L.Map): HTMLElement;
    private _bindEvents;
}
