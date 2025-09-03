import type { Coordinate } from './Coordinate';
/**
 * Represents a geographical object in terms of its position and its address.
 */
export type Location = {
    /**
     * The postal code of the address.
     */
    postcode?: string | null;
    /**
     * The street name of the address
     */
    street?: string | null;
    /**
     * The HouseNr of the address
     */
    houseNr?: string | null;
    /**
     * The district of the address, i.e. the entity below city.
     */
    district?: string | null;
    /**
     * The city of the address,
     */
    city?: string | null;
    /**
     * The name of the principal country subdivision which the address belongs to
     */
    province?: string | null;
    /**
     * Country code according to ISO 3166-1 alpha-2. Defaults to NL. The search will be restricted to this country. When empty, all countries contained in the geocoding data will be included in the search.
     */
    country?: string | null;
    coordinate?: Coordinate;
    /**
     * Indicates the overall match quality for a geocoding request. 100 (percent) represents a perfect match between the input and the result.
     */
    score?: number;
    /**
     * A radius that specifies how close the route shall pass by the specified coordinate, only to be used with via waypoints. This radius refers to the distance on the road network in meters.
     * When set there is no output waypoint. The route passes near the specified coordinate.
     */
    distance?: number | null;
    /**
     * A single string representing the address, typically consisting of the street, house number, postal code, city, and country. The precise format may differ based on what is appropriate for the address.
     */
    description?: string | null;
};
//# sourceMappingURL=Location.d.ts.map