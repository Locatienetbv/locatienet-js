import { TimeDistanceService, LocateSearchByText, LocateSearchByPosition, Country, LocateOptions, MapRouteService, Coordinate, Location, RouteRequest, Address, LocateSearchByAddress, RouteOptions, CalculateRouteInfoResponse, CalculateRouteDescriptionResponse} from './generated';
import type { Feature, FeatureCollection, LineString, Point, Position } from "geojson";


/**
 * Extended GeoJSON Point Feature with address information
 * 
 * @interface LocateFeatureResult
 * @extends {Feature<Point>}
 */
export interface LocateFeatureResult extends Feature<Point> {
  properties: Address
}

/**
 * Search for locations using a free-form text input. 
 * 
 * @param {string} query input
 * @param {string} [country]
 * @param {LocateOptions} [options]
 * @returns {*}  {Promise<Array<LocateFeatureResult>>}
 */
export async function locateByText(query: string, country?: string, options?: LocateOptions): Promise<Array<LocateFeatureResult>> {
    const request: LocateSearchByText = {
        text: query,
        country,
        options: options
    };
    const response: Location[] = await TimeDistanceService.postRsV1LocateSearchByText(request);

    return response
        .filter(x => x.coordinate?.x != null && x.coordinate?.y != null)
        .map((x): LocateFeatureResult => ({
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [x.coordinate?.x || 0, x.coordinate?.y || 0], // make sure order = [lon, lat]
        },
        properties: x
    }));
};

 /**
  * Search for locations using structured address input.
  * 
  * @param {Address} address
  * @param {LocateOptions} [options]
  * @returns {*}  {Promise<Array<LocateFeatureResult>>}
  */
 export async function locateByAddress(address : Address, options?: LocateOptions): Promise<Array<LocateFeatureResult>> {
        const request: LocateSearchByAddress = {
            address: address,
            options: options
        };
        const response: Location[] = await TimeDistanceService.postRsV1LocateSearchByAddress(request);

        return response
            .filter(x => x.coordinate?.x != null && x.coordinate?.y != null)
            .map((x): LocateFeatureResult => ({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [x.coordinate?.x || 0, x.coordinate?.y || 0], // make sure order = [lon, lat]
            },
            properties: x,
        }));
    }

/**
 * Search for addresses using structured coordinate input.
 * 
 * @param {(Coordinate | Position)} position
 * @param {LocateOptions} [options]
 * @returns {*}  {Promise<Array<LocateFeatureResult>>}
 */
export async function locateByPosition(position : Coordinate | Position, options?: LocateOptions) : Promise<Array<LocateFeatureResult>> {
    const coordinate: Coordinate = Array.isArray(position) ? { x: position[0], y: position[1] } : position;
    const request : LocateSearchByPosition = {
        coordinate: coordinate,
        options: options
    }
    const response: Location[] = await MapRouteService.postRsV1LocateSearchByPosition(request);

    return response
        .filter(x => x.coordinate?.x != null && x.coordinate?.y != null)
        .map((x): LocateFeatureResult => ({
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [x.coordinate?.x || 0, x.coordinate?.y || 0], // make sure order = [lon, lat]
        },
        properties: x,
    }));
}

/**
 * Extended GeoJSON Linestring Feature with route info
 * 
 * @interface RouteInfoFeatureResult
 * @extends {Feature<LineString>}
 */
export interface RouteInfoFeatureResult extends Feature<LineString> {
  properties: {
    distance?: number,
    travelTime?: number
  }
}

/**
 * Calculates and returns basic route information and polyline as GeoJSON Feature.
 * 
 * @param {Location[]} [locations]
 * @param {RouteOptions} [options]
 * @returns {*}  {Promise<RouteInfoFeatureResult>}
 */
export async function calculateRouteInfo(locations?: Location[], options?: RouteOptions) : Promise<RouteInfoFeatureResult> {
    const request : RouteRequest = {
        locations : locations,
        options : {...options, ...{ includePolyline: true }}
    }
    const response: CalculateRouteInfoResponse = await TimeDistanceService.postRsV1RouteCalculateRouteInfo(request);

    const coords: Position[] = (response.polyline ?? []).filter(p => p.x != null && p.y != null).map(p => [p.x!, p.y!] as Position);
    
    return { type: "Feature", 
        geometry: { type: "LineString", coordinates: coords},
        properties: {
            distance: response.distance,
            travelTime : response.travelTime 
        }
    }
}  


/**
 * Calculates and returns basic route information, descriptions and polyline.
 * 
 * @param {Location[]} [locations]
 * @param {RouteOptions} [options]
 * @returns {*}  {Promise<CalculateRouteDescriptionResponse>}
 */
export async function calculateRoute(locations?: Location[], options?: RouteOptions) : Promise<CalculateRouteDescriptionResponse> {
    const request : RouteRequest = {
        locations : locations,
        options : options
    }
    return await MapRouteService.postRsV1RouteCalculateRouteDescription(request);

};



/**
 * Fetch all EU country information, name in different languages and their iso codes
 * 
 * @returns {*}  {Promise<Country[]>}
 */
export async function countries(): Promise<Country[]> {
    return await TimeDistanceService.getRsV1CountryList();
};