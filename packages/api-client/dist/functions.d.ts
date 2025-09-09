import { Country, LocateOptions, Coordinate, Location, Address, RouteOptions, CalculateRouteDescriptionResponse } from './generated';
import type { Feature, LineString, Point, Position } from "geojson";
/**
 * Extended GeoJSON Point Feature with address information
 *
 * @interface LocateFeatureResult
 * @extends {Feature<Point>}
 */
export interface LocateFeatureResult extends Feature<Point> {
    properties: Location;
}
/**
 * Search for locations using a free-form text input.
 *
 * @param {string} query input
 * @param {string} [country]
 * @param {LocateOptions} [options]
 * @returns {*}  {Promise<Array<LocateFeatureResult>>}
 */
export declare function locateByText(query: string, country?: string, options?: LocateOptions): Promise<Array<LocateFeatureResult>>;
/**
 * Search for locations using structured address input.
 *
 * @param {Address} address
 * @param {LocateOptions} [options]
 * @returns {*}  {Promise<Array<LocateFeatureResult>>}
 */
export declare function locateByAddress(address: Address, options?: LocateOptions): Promise<Array<LocateFeatureResult>>;
/**
 * Search for addresses using structured coordinate input.
 *
 * @param {(Coordinate | Position)} position
 * @param {LocateOptions} [options]
 * @returns {*}  {Promise<Array<LocateFeatureResult>>}
 */
export declare function locateByPosition(position: Coordinate | Position, options?: LocateOptions): Promise<Array<LocateFeatureResult>>;
/**
 * Extended GeoJSON Linestring Feature with route info
 *
 * @interface RouteInfoFeatureResult
 * @extends {Feature<LineString>}
 */
export interface RouteInfoFeatureResult extends Feature<LineString> {
    properties: {
        distance?: number;
        travelTime?: number;
    };
}
/**
 * Calculates and returns basic route information and polyline as GeoJSON Feature.
 *
 * @param {Location[]} [locations]
 * @param {RouteOptions} [options]
 * @returns {*}  {Promise<RouteInfoFeatureResult>}
 */
export declare function calculateRouteInfo(locations?: Location[], options?: RouteOptions): Promise<RouteInfoFeatureResult>;
/**
 * Calculates and returns basic route information, descriptions and polyline.
 *
 * @param {Location[]} [locations]
 * @param {RouteOptions} [options]
 * @returns {*}  {Promise<CalculateRouteDescriptionResponse>}
 */
export declare function calculateRoute(locations?: Location[], options?: RouteOptions): Promise<CalculateRouteDescriptionResponse>;
/**
 * Fetch all EU country information, name in different languages and their iso codes
 *
 * @returns {*}  {Promise<Country[]>}
 */
export declare function countries(): Promise<Country[]>;
