import type { Coordinate } from './Coordinate';
import type { MapImageOptions } from './MapImageOptions';
import type { MapMapOptions } from './MapMapOptions';
export type MapRequestByCenter = {
    imageOptions?: MapImageOptions;
    mapOptions?: MapMapOptions;
    center?: Coordinate;
    /**
     * The geographical resolution at which to display the map, where zoom 0 corresponds to a map of the Earth fully zoomed out, and larger zoom levels zoom in at a higher resolution. Offering a map of the entire Earth as a single image would either require an immense map, or a small map with very low resolution. As a result, map images are broken up into map 'tiles' and 'zoom levels'. At low zoom levels, a small set of map tiles covers a wide area; at higher zoom levels, the tiles are of higher resolution and cover a smaller area. Fractional values are allowed. The zoom is currently restricted to the range 0..22. Range: 0 ≤ value.
     */
    zoom?: number;
};
//# sourceMappingURL=MapRequestByCenter.d.ts.map