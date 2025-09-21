import * as L from 'leaflet';
export interface LocatienetOptions extends L.TileLayerOptions {
}
export declare class LocatienetTileLayer extends L.TileLayer {
    constructor();
    createTile(coords: L.Coords, done: L.DoneCallback): HTMLImageElement;
}
