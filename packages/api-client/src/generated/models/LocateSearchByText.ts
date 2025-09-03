/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocateOptions } from './LocateOptions';
export type LocateSearchByText = {
    /**
     * The input address.
     */
    text?: string | null;
    /**
     * Country code according to ISO 3166-1 alpha-2. Defaults to NL. The search will be restricted to this country. When empty, all countries contained in the geocoding data will be included in the search.
     */
    country?: string | null;
    options?: LocateOptions;
};

