import type { Coordinate } from './Coordinate';
import type { Location } from './Location';
import type { RouteDescription } from './RouteDescription';
export type CalculateRouteDescriptionResponse = {
    /**
     * The distance of the complete route.
     */
    distance?: number;
    /**
     * The travel time for the complete route.
     */
    travelTime?: number;
    /**
     * The total delay due to traffic incidents(traffic jams, construction sites etc.) on the route.
     */
    trafficDelay?: number | null;
    waypoints?: Array<Location> | null;
    /**
     * List of descriptions describing the route
     */
    descriptions?: Array<RouteDescription> | null;
    /**
     * List of coordinates of the polyline of the route
     */
    polyline?: Array<Coordinate> | null;
};
