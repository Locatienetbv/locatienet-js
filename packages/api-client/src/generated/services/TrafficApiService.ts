/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrafficOptions } from '../models/TrafficOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrafficApiService {
    /**
     * A GeoJson feature collection with the current (dutch) traffic situation. Includes congestions and major roadworks
     * @param requestBody Options such as language of the output
     * @returns any OK
     * @throws ApiError
     */
    public static postRsV1TrafficFeatures(
        requestBody?: TrafficOptions,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rs/v1/Traffic/features',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
