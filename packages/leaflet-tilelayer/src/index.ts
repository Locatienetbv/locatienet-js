import { LocatienetTileLayer } from "./LocatienetTileLayer";


// Attach globally for UMD/browser usage
if (typeof window !== "undefined" && (window as any).L) {
    const L = (window as any).L;
    L.LocatienetTileLayer = L.LocatienetTileLayer || {};
    L.locatienetTileLayer = function(): L.TileLayer {
        return new LocatienetTileLayer();
    }
}