import * as L from "leaflet";
import { SearchAddress, SearchAddressOptions } from "./SearchAddress"; // your class from above

export class SearchAddressControl extends L.Control  {
    private _map!: L.Map;
    private _container!: HTMLElement;
    private _searchaddress!: SearchAddress;

    constructor(options?: SearchAddressOptions) {
        super(options);
    }


    onAdd(map: L.Map): HTMLElement {
        this._map = map;
        this._container = L.DomUtil.create('div', 'leaflet-control-layers');
        this._container.style.minWidth = '350px';

        this._searchaddress = new SearchAddress(this._map, this._container, this.options);
        this._bindEvents();

        return this._container;
    }

    private _bindEvents() {

        this._searchaddress.on("address", (data: any) => {
            (this as unknown as L.Evented).fire("address", data);
        });

        this._searchaddress.on("clear", () => {
            this._map.fire("clear-address");
            (this as unknown as L.Evented).fire("clear");
        });
    }
}

// At the bottom of your SearchAddressControl.ts
Object.assign(SearchAddressControl.prototype, L.Evented.prototype);
