import apikey from './apikey';
import { OpenAPI, TimeDistanceService, LocateSearchByText, Country, LocateOptions } from './generated';

// Configure OpenAPI defaults
OpenAPI.BASE = 'https://services.locatienet.com';
OpenAPI.HEADERS = {
    'X-API-KEY': apikey
};

// API wrapper
export const Api = {
    apikey : apikey,  // store API key in the wrapper
    countries: async (): Promise<Country[]> => {
        return await TimeDistanceService.getRsV1CountryList();
    },
    locateByText: async (query: string, country?: string, options?: LocateOptions) => {
        const request: LocateSearchByText = {
            text: query,
            country,
            options: options
        };
        return await TimeDistanceService.postRsV1LocateSearchByText(request).then(
            (response) => {
                return response.map(x => { 
                    return { type: "Feature", geometry: { type: "Point", coordinates: [x.coordinate?.x, x.coordinate?.y ]}, properties: { description : x.description }}
                })
            }
        );
    }
};

// Attach to global for UMD
if (typeof window !== 'undefined') {
    (window as any).LN = (window as any).LN || {};
    (window as any).LN.api = Api;
}
