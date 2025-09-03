import type { CalculateRouteInfoResponse } from '../models/CalculateRouteInfoResponse';
import type { Country } from '../models/Country';
import type { LocateSearchByAddress } from '../models/LocateSearchByAddress';
import type { LocateSearchByText } from '../models/LocateSearchByText';
import type { Location } from '../models/Location';
import type { RouteRequest } from '../models/RouteRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TimeDistanceService {
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
     * Calculates and returns basic route information and polyline.
     * @param requestBody
     * @returns CalculateRouteInfoResponse OK
     * @throws ApiError
     */
    static postRsV1RouteCalculateRouteInfo(requestBody?: RouteRequest): CancelablePromise<CalculateRouteInfoResponse>;
    /**
     * A list of available countries.
     * @returns Country OK
     * @throws ApiError
     */
    static getRsV1CountryList(): CancelablePromise<Array<Country>>;
}
//# sourceMappingURL=TimeDistanceService.d.ts.map