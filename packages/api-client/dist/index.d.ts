import { locateByText, locateByAddress, countries, locateByPosition, calculateRouteInfo, LocateFeatureResult, RouteInfoFeatureResult } from "./functions";
/** @type {*} */
declare const Api: {
    apikey: any;
    /**
     * Search for locations using a free-form text input.
     *
     * @param {string} query input
     * @param {string} [country]
     * @param {LocateOptions} [options]
     * @returns {*}  {Promise<Array<LocateFeatureResult>>}
     */
    locateByText: typeof locateByText;
    /**
     * Search for locations using structured address input.
     *
     * @param {Address} address
     * @param {LocateOptions} [options]
     * @returns {*}  {Promise<Array<LocateFeatureResult>>}
     */
    locateByAddress: typeof locateByAddress;
    /**
     * Search for addresses using structured coordinate input.
     *
     * @param {(Coordinate | Position)} position
     * @param {LocateOptions} [options]
     * @returns {*}  {Promise<Array<LocateFeatureResult>>}
     */
    locateByPosition: typeof locateByPosition;
    /**
     * Calculates and returns basic route information and polyline as GeoJSON Feature.
     *
     * @param {Location[]} [locations]
     * @param {RouteOptions} [options]
     * @returns {*}  {Promise<RouteInfoFeatureResult>}
     */
    calculateRouteInfo: typeof calculateRouteInfo;
    /**
     * Calculates and returns basic route information, descriptions and polyline.
     *
     * @param {Location[]} [locations]
     * @param {RouteOptions} [options]
     * @returns {*}  {Promise<CalculateRouteDescriptionResponse>}
     */
    calculateRoute: typeof calculateRouteInfo;
    /**
     * Fetch all EU country information, name in different languages and their iso codes
     *
     * @returns {*}  {Promise<Country[]>}
     */
    countries: typeof countries;
};
export { Api };
import { Address, Coordinate, LocateOptions, Location, RouteOptions, CountryType, Country, CalculateRouteDescriptionResponse, RouteDescription, ManeuverType, RoadEvent } from "./generated";
export type { Address, Coordinate, Location, LocateOptions, RouteOptions, CountryType, Country, CalculateRouteDescriptionResponse, RouteDescription, ManeuverType, RoadEvent, LocateFeatureResult, RouteInfoFeatureResult };
