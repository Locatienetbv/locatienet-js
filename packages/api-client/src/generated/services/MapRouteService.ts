/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MapRouteService {
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
     * Search for addresses using structured coordinate input.
     * @param requestBody
     * @returns Location OK
     * @throws ApiError
     */
    public static postRsV1LocateSearchByPosition(
        requestBody?: LocateSearchByPosition,
    ): CancelablePromise<Array<Location>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rs/v1/Locate/searchByPosition',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Calculates and returns basic route information, descriptions and polyline.
     * @param requestBody
     * @returns CalculateRouteDescriptionResponse OK
     * @throws ApiError
     */
    public static postRsV1RouteCalculateRouteDescription(
        requestBody?: RouteRequest,
    ): CancelablePromise<CalculateRouteDescriptionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rs/v1/Route/calculateRouteDescription',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * The required map section is described by its tile key. Use https://[tileserver|tile[0|1|2|3]].locatienet.com/{z}/{x}/{y}.png?apikey={your apikey}
     * @returns string OK
     * @throws ApiError
     */
    public static getRsV1MapRenderMapTile(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rs/v1/Map/renderMapTile',
        });
    }
    /**
     * The required map is described by its bounds..
     * @param requestBody
     * @returns MapResponse OK
     * @throws ApiError
     */
    public static postRsV1MapRenderMapByBounds(
        requestBody?: MapRequestByBounds,
    ): CancelablePromise<MapResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rs/v1/Map/renderMapByBounds',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * The required map is described by its center coordinate and its zooming.
     * @param requestBody
     * @returns MapResponse OK
     * @throws ApiError
     */
    public static postRsV1MapRenderMapByCenter(
        requestBody?: MapRequestByCenter,
    ): CancelablePromise<MapResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rs/v1/Map/renderMapByCenter',
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
