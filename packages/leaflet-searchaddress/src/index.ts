import { SearchAddressControl } from "./SearchAddressControl";

// UMD globals (only if Leaflet is loaded)
if (typeof window !== "undefined" && (window as any).L) {
    const L = (window as any).L;
    L.AddressSearch = L.AddressSearch || {};
    L.AddressSearch.Control = SearchAddressControl;
}

