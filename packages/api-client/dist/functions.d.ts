import { Country, LocateOptions, Coordinate, Location, Address, RouteOptions, CalculateRouteDescriptionResponse } from './generated';
import type { Feature, LineString, Point, Position } from "geojson";
/**
 * @description extended GeoJSON Point Feature with address information
 * @author Remco Zut
 * @interface LocateFeatureResult
 * @extends {Feature<Point>}
 */
export interface LocateFeatureResult extends Feature<Point> {
    properties: Address;
}
/**
 * @description Search for locations using a free-form text input.
 * @author Remco Zut
 * @param {string} query input
 * @param {string} [country]
 * @param {LocateOptions} [options]
 * @returns {*}  {Promise<Array<LocateFeatureResult>>}
 */
export declare function locateByText(query: string, country?: string, options?: LocateOptions): Promise<Array<LocateFeatureResult>>;
/**
 * @description Search for locations using structured address input.
 * @author Remco Zut
 * @export
 * @param {Address} address
 * @param {LocateOptions} [options]
 * @returns {*}  {Promise<Array<LocateFeatureResult>>}
 */
export declare function locateByAddress(address: Address, options?: LocateOptions): Promise<Array<LocateFeatureResult>>;
/**
 * @description Search for addresses using structured coordinate input.
 * @author Remco Zut
 * @export
 * @param {(Coordinate | Position)} position
 * @param {LocateOptions} [options]
 * @returns {*}  {Promise<Array<LocateFeatureResult>>}
 */
export declare function locateByPosition(position: Coordinate | Position, options?: LocateOptions): Promise<Array<LocateFeatureResult>>;
/**
 * @description extended GeoJSON Linestring Feature with route info
 * @author Remco Zut
 * @export
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
 * @description Calculates and returns basic route information and polyline as GeoJSON Feature.
 * @author Remco Zut
 * @export
 * @param {Location[]} [locations]
 * @param {RouteOptions} [options]
 * @returns {*}  {Promise<RouteInfoFeatureResult>}
 */
export declare function calculateRouteInfo(locations?: Location[], options?: RouteOptions): Promise<RouteInfoFeatureResult>;
/**
 * @description Calculates and returns basic route information, descriptions and polyline.
 * @author Remco Zut
 * @export
 * @param {Location[]} [locations]
 * @param {RouteOptions} [options]
 * @returns {*}  {Promise<CalculateRouteDescriptionResponse>}
 */
export declare function calculateRoute(locations?: Location[], options?: RouteOptions): Promise<CalculateRouteDescriptionResponse>;
/**
 * @description Fetch all EU country information, name in different languages and their iso codes
 * @author Remco Zut
 * @export
 * @returns {*}  {Promise<Country[]>}
 */
export declare function countries(): Promise<Country[]>;
