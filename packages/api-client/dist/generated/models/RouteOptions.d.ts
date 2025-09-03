import type { RouteOptimization } from './RouteOptimization';
import type { TimeConsiderationType } from './TimeConsiderationType';
import type { VehicleType } from './VehicleType';
export type RouteOptions = {
    vehicle?: VehicleType;
    optimization?: RouteOptimization;
    /**
     * The language of texts such as maneuver or traffic-incident descriptions. Defaults to nl. This standard allows to use two-letter ISO 639-1 codes
     */
    language?: string | null;
    /**
     * Force the routing algorithm to avoid freeways
     */
    avoidHighways?: boolean;
    /**
     * Force the routing algorithm to avoid tollroads
     */
    avoidToll?: boolean;
    /**
     * Force the routing algorithm to avoid ferries
     */
    avoidFerry?: boolean;
    /**
     * Force the routing algorithm to avoid current traffic
     */
    avoidTrafficIncidents?: boolean;
    /**
     * Force the routing algorithm to avoid emissionzones
     */
    avoidEmissionZones?: boolean;
    referenceTime?: string;
    timeConsiderationType?: TimeConsiderationType;
    /**
     * Include the polyline of the route. The polyline is a list of sequential coordinates of roadnodes
     */
    includePolyline?: boolean;
};
