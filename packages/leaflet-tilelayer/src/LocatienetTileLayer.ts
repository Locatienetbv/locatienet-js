import { Api } from "@locatienet/api-client";
import * as L from 'leaflet';

const url = `https://tile{s}.locatienet.com/{z}/{x}/{y}.png?apikey=${Api.apikey}`

const attribution = ' &#169; <a href="https://locatienet.com">Locatienet</a>, <a href="https://ptvgroup.com">PTV Group</a>, <a href="https://here.com">HERE</a>'
// declare all characters

import {generateString} from "@locatienet/shared"
const sku = generateString(10);

const options = { sku: sku, subdomains: '0123', minZoom: 4, maxZoom: 23, attribution: new Date().getFullYear() + attribution }


export interface LocatienetOptions extends L.TileLayerOptions {
  
}

export class LocatienetTileLayer extends L.TileLayer {

  constructor() {
    super(url, options);
  }

  createTile(coords: L.Coords, done: L.DoneCallback): HTMLImageElement {
    const url = this.getTileUrl(coords);
    const tile = document.createElement("img");
    (tile as any)._map = (this as any)._map;

    const headers: HeadersInit = {};
    if (options.sku) {
      headers["sku"] = options.sku;
    }

    (async () => {
      try {
        const response = await fetch(url, { headers });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const blob = await response.blob();

        const blobUrl = URL.createObjectURL(blob);
        tile.src = blobUrl;

        // Clean up blob after image loads or errors
        tile.onload = tile.onerror = () => {
          URL.revokeObjectURL(blobUrl);
        };

        done(undefined, tile);
      } catch (e) {
        // Still call done so Leaflet doesn't hang waiting
        done(undefined, tile);
      }
    })();

    return tile;
  }
}
