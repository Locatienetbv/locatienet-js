/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculateRouteInfoResponse } from '../models/CalculateRouteInfoResponse';
import type { Country } from '../models/Country';
import type { LocateSearchByAddress } from '../models/LocateSearchByAddress';
import type { LocateSearchByText } from '../models/LocateSearchByText';
import type { Location } from '../models/Location';
import type { RouteRequest } from '../models/RouteRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TimeDistanceService {
    /**
     * Search for locations using a free-form text input.
     * @param requestBody
     * @returns Location OK
     * @throws ApiError
     */
    public static postRsV1LocateSearchByText(
        requestBody?: LocateSearchByText,
    ): CancelablePromise<Array<Location>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rs/v1/Locate/searchByText',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Search for locations using structured address input.
     * @param requestBody
     * @returns Location OK
     * @throws ApiError
     */
    public static postRsV1LocateSearchByAddress(
        requestBody?: LocateSearchByAddress,
    ): CancelablePromise<Array<Location>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rs/v1/Locate/searchByAddress',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Calculates and returns basic route information and polyline.
     * @param requestBody
     * @returns CalculateRouteInfoResponse OK
     * @throws ApiError
     */
    public static postRsV1RouteCalculateRouteInfo(
        requestBody?: RouteRequest,
    ): CancelablePromise<CalculateRouteInfoResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rs/v1/Route/calculateRouteInfo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * A list of available countries.
     * @returns Country OK
     * @throws ApiError
     */
    public static getRsV1CountryList(): CancelablePromise<Array<Country>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rs/v1/Country/list',
        });
    }
}
