import { Country, LocateOptions } from './generated';
export declare const Api: {
    apikey: any;
    countries: () => Promise<Country[]>;
    locateByText: (query: string, country?: string, options?: LocateOptions) => Promise<{
        type: string;
        geometry: {
            type: string;
            coordinates: (number | undefined)[];
        };
        properties: {
            description: string | null | undefined;
        };
    }[]>;
};
