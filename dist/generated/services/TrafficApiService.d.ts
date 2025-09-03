import type { TrafficOptions } from '../models/TrafficOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TrafficApiService {
    /**
     * A GeoJson feature collection with the current (dutch) traffic situation. Includes congestions and major roadworks
     * @param requestBody Options such as language of the output
     * @returns any OK
     * @throws ApiError
     */
    static postRsV1TrafficFeatures(requestBody?: TrafficOptions): CancelablePromise<any>;
}
//# sourceMappingURL=TrafficApiService.d.ts.map