import L, { Control, Map, Marker } from 'leaflet';
export interface SearchPositionOptions {
    position?: L.ControlPosition;
    inputElement?: HTMLInputElement;
    showPopup?: boolean;
    debounceMs?: number;
    marker?: Marker;
    enabled?: boolean;
}
export declare class SearchPositionControl extends Control {
    private map;
    private button;
    private icon;
    private marker?;
    private inputElement?;
    private showPopup;
    private debounceMs;
    private clickTimeout?;
    private enabled;
    constructor(options?: SearchPositionOptions);
    onAdd(map: Map): HTMLElement;
    /** Toggle active state */
    private _toggleActive;
    /** Update SVG based on active state */
    private _updateIcon;
    private _onMapClick;
    private _handleClick;
    reverseGeocode(lat: number, lng: number): Promise<void>;
    private _handleResult;
}
