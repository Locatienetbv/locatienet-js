import { OpenAPI } from "./generated";
import { locateByText, locateByAddress, countries, locateByPosition, calculateRouteInfo  } from "./functions";
import apikey from './apikey';

// Configure OpenAPI defaults
OpenAPI.HEADERS = {
    'X-API-KEY': apikey
};


/** @type {*} */
const Api = {
    apikey : apikey,  // API key

    locateByText: locateByText,

    locateByAddress: locateByAddress,


    locateByPosition: locateByPosition,

    
    calculateRouteInfo: calculateRouteInfo,
    
    calculateRoute: calculateRouteInfo,

    countries: countries


};

// Attach to global for UMD
if (typeof window !== 'undefined') {
    (window as any).LN = (window as any).LN || {};
    (window as any).LN.Api = Api;
}

export { Api };

import { Address, Coordinate, LocateOptions, Location, RouteOptions} from "./generated";
export type { Address, Coordinate, Location, LocateOptions, RouteOptions};
