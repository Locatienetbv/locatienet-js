import type { Coordinate } from './Coordinate';
import type { Location } from './Location';
export type CalculateRouteInfoResponse = {
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
    polyline?: Array<Coordinate> | null;
};
//# sourceMappingURL=CalculateRouteInfoResponse.d.ts.map