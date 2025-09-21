import { SearchAddressControl } from "./SearchAddressControl";
import { SearchAddress, SearchAddressOptions } from "./SearchAddress";
import { SearchPositionControl, SearchPositionOptions } from "./SearchPositionControl";
import { Address } from "./Address";    

if (typeof window != "undefined") {
    (window as any).Address = Address;
}

// UMD globals (only if Leaflet is loaded)
if (typeof window !== "undefined" && (window as any).L) {
    const L = (window as any).L;
    L.Control = L.Control || {};
    L.Control.SearchAddress = SearchAddressControl;
    L.control.searchAddress = function(): L.Control {
        return new SearchAddressControl();
    }
    L.Control.SearchPosition = SearchPositionControl;
    L.control.searchPosition = function(): L.Control {
        return new SearchPositionControl();
    }

}


export { Address }
export { SearchAddressControl, SearchAddress, SearchPositionControl };
export type { SearchAddressOptions, SearchPositionOptions };
