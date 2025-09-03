import type { CalculateRouteDescriptionResponse } from '../models/CalculateRouteDescriptionResponse';
import type { Country } from '../models/Country';
import type { LocateSearchByAddress } from '../models/LocateSearchByAddress';
import type { LocateSearchByPosition } from '../models/LocateSearchByPosition';
import type { LocateSearchByText } from '../models/LocateSearchByText';
import type { Location } from '../models/Location';
import type { MapRequestByBounds } from '../models/MapRequestByBounds';
import type { MapRequestByCenter } from '../models/MapRequestByCenter';
import type { MapResponse } from '../models/MapResponse';
import type { RouteRequest } from '../models/RouteRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MapRouteService {
    /**
     * Search for locations using a free-form text input.
     * @param requestBody
     * @returns Location OK
     * @throws ApiError
     */
    static postRsV1LocateSearchByText(requestBody?: LocateSearchByText): CancelablePromise<Array<Location>>;
    /**
     * Search for locations using structured address input.
     * @param requestBody
     * @returns Location OK
     * @throws ApiError
     */
    static postRsV1LocateSearchByAddress(requestBody?: LocateSearchByAddress): CancelablePromise<Array<Location>>;
    /**
     * Search for addresses using structured coordinate input.
     * @param requestBody
     * @returns Location OK
     * @throws ApiError
     */
    static postRsV1LocateSearchByPosition(requestBody?: LocateSearchByPosition): CancelablePromise<Array<Location>>;
    /**
     * Calculates and returns basic route information, descriptions and polyline.
     * @param requestBody
     * @returns CalculateRouteDescriptionResponse OK
     * @throws ApiError
     */
    static postRsV1RouteCalculateRouteDescription(requestBody?: RouteRequest): CancelablePromise<CalculateRouteDescriptionResponse>;
    /**
     * The required map section is described by its tile key. Use https://[tileserver|tile[0|1|2|3]].locatienet.com/{z}/{x}/{y}.png?apikey={your apikey}
     * @returns string OK
     * @throws ApiError
     */
    static getRsV1MapRenderMapTile(): CancelablePromise<string>;
    /**
     * The required map is described by its bounds..
     * @param requestBody
     * @returns MapResponse OK
     * @throws ApiError
     */
    static postRsV1MapRenderMapByBounds(requestBody?: MapRequestByBounds): CancelablePromise<MapResponse>;
    /**
     * The required map is described by its center coordinate and its zooming.
     * @param requestBody
     * @returns MapResponse OK
     * @throws ApiError
     */
    static postRsV1MapRenderMapByCenter(requestBody?: MapRequestByCenter): CancelablePromise<MapResponse>;
    /**
     * A list of available countries.
     * @returns Country OK
     * @throws ApiError
     */
    static getRsV1CountryList(): CancelablePromise<Array<Country>>;
}
