export type TrafficOptions = {
    /**
     * list of countries to include in the traffic information (currently only Dutch and Belgium traffic information is available)
     */
    countries?: Array<string> | null;
    /**
     * The language used for geographic names. Defaults to nl. This standard allows to use two-letter ISO 639-1 codes
     */
    language?: string | null;
};
