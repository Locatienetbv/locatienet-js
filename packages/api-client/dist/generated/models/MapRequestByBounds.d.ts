import type { BoundingBox } from './BoundingBox';
import type { MapImageOptions } from './MapImageOptions';
import type { MapMapOptions } from './MapMapOptions';
export type MapRequestByBounds = {
    imageOptions?: MapImageOptions;
    mapOptions?: MapMapOptions;
    bounds?: BoundingBox;
};
