import { locateByText, locateByAddress, countries, locateByPosition, calculateRouteInfo } from "./functions";
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
    locateByAddress: typeof locateByAddress;
    locateByPosition: typeof locateByPosition;
    calculateRouteInfo: typeof calculateRouteInfo;
    calculateRoute: typeof calculateRouteInfo;
    countries: typeof countries;
};
export { Api };
import { Address, Coordinate, LocateOptions, Location, RouteOptions } from "./generated";
export type { Address, Coordinate, Location, LocateOptions, RouteOptions };
