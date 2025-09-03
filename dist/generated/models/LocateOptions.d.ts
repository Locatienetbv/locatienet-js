import type { CountryType } from './CountryType';
export type LocateOptions = {
    /**
     * The language used for geographic names. Defaults to nl. This standard allows to use two-letter ISO 639-1 codes
     */
    language?: string | null;
    /**
     * Limit the number of resulting locations (default 5)
     */
    numResults?: number | null;
    /**
     * Minimal score of the results (default 90)
     */
    minimalResultScore?: number | null;
    outputCountryType?: CountryType;
};
//# sourceMappingURL=LocateOptions.d.ts.map