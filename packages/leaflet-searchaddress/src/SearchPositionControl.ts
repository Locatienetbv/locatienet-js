import L, { Control, Map, Marker } from 'leaflet';
import { Api, LocateFeatureResult } from '@locatienet/api-client';

export interface SearchPositionOptions {
  position?: L.ControlPosition;
  inputElement?: HTMLInputElement;
  showPopup?: boolean;
  debounceMs?: number;
  marker?: Marker;
  enabled?: boolean;
}

export class SearchPositionControl extends Control {
  private map!: Map;
  private button!: HTMLAnchorElement;
  private icon!: HTMLImageElement;
  private marker?: Marker;
  private inputElement?: HTMLInputElement;
  private showPopup: boolean;
  private debounceMs: number;
  private clickTimeout?: number;
  private enabled: boolean = false;

  constructor(options: SearchPositionOptions = {}) {
    super({ position: options.position ?? 'topleft' });

    this.showPopup = options.showPopup ?? true;
    this.debounceMs = options.debounceMs ?? 200;
    this.marker = options.marker;
    this.inputElement = options.inputElement;
    this.enabled = options.enabled ?? false;
  }

  onAdd(map: Map): HTMLElement {
    this.map = map;

    const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');

    // Button
    this.button = L.DomUtil.create('a', 'd-flex justify-content-center align-items-center', container) as HTMLAnchorElement;
    this.button.href = '#';
    this.button.title = 'Enable reverse geocode';
    this.button.style.width = '30px';
    this.button.style.height = '30px';

    // Icon (SVG)
    this.icon = L.DomUtil.create('img', '', this.button) as HTMLImageElement;
    this.icon.src = './dist/img/pin-map.svg';
    this.icon.style.width = '20px';
    this.icon.style.height = '20px';
    this.icon.style.pointerEvents = 'none'; // let button handle clicks

    L.DomEvent.on(this.button, 'click', L.DomEvent.stopPropagation)
              .on(this.button, 'click', L.DomEvent.preventDefault)
              .on(this.button, 'click', () => this._toggleActive());

    this.map.on('click', (e: L.LeafletMouseEvent) => this._onMapClick(e));

    return container;
  }

  /** Toggle active state */
  private _toggleActive() {
    this.enabled = !this.enabled;
    this._updateIcon();
  }

  /** Update SVG based on active state */
  private _updateIcon() {
    if (!this.icon) return;

    if (this.enabled) {
      this.icon.src = './dist/img/pin-map-fill.svg';
      this.button.title = 'Reverse geocode enabled';
    } else {
      this.icon.src = './dist/img/pin-map.svg';
      this.button.title = 'Enable reverse geocode';
    }
  }

  private _onMapClick(e: L.LeafletMouseEvent) {
    if (!this.enabled) return;

    if (this.clickTimeout) clearTimeout(this.clickTimeout);

    const { lat, lng } = e.latlng;
    this.clickTimeout = window.setTimeout(() => this._handleClick(lat, lng), this.debounceMs);
  }

  private _handleClick(lat: number, lng: number) {
    if (this.marker) {
      this.marker.setLatLng([lat, lng]);
    } else {
      this.marker = L.marker([lat, lng]).addTo(this.map);
    }

    this.reverseGeocode(lat, lng);
  }

  public async reverseGeocode(lat: number, lng: number) {
    try {
      const results: LocateFeatureResult[] = await Api.locateByPosition({ x: lng, y: lat });
      if (results.length > 0) this._handleResult(results[0], lat, lng);
    } catch (err) {
      this.map.fire('searchposition:error', { error: err });
    }
  }

  private _handleResult(result: LocateFeatureResult, lat: number, lng: number) {
    if (this.inputElement) this.inputElement.value = result.properties.description || '';

    if (this.showPopup && this.marker) {
      this.marker.bindPopup(result.properties.description || '').openPopup();
    }

    this.map.fire('address', result);
  }
}
