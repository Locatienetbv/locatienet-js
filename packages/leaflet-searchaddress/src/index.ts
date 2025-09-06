import { SearchAddressControl } from "./SearchAddressControl";

// UMD globals (only if Leaflet is loaded)
if (typeof window !== "undefined" && (window as any).L) {
    const L = (window as any).L;
    L.Control = L.Control || {};
    L.Control.SearchAddress = SearchAddressControl;
    L.control.searchAddress = function(): L.Control {
        return new SearchAddressControl();
    }

}

