import type { Location } from './Location';
import type { RouteOptions } from './RouteOptions';
export type RouteRequest = {
    /**
     * A list of sequential locations
     */
    locations?: Array<Location> | null;
    options?: RouteOptions;
};
