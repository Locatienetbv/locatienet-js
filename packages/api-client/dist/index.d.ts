import { locateByText, locateByAddress, countries, locateByPosition, calculateRouteInfo } from "./functions";
declare const Api: {
    apikey: any;
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
