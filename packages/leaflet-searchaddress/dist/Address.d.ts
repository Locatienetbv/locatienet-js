import * as L from "leaflet";
import { Feature, Point } from "geojson";
export declare class Address {
    address?: string;
    latLng?: L.LatLng;
    street?: string;
    houseNr?: string;
    postcode?: string;
    city?: string;
    province?: string;
    country?: string;
    constructor(address: string | Feature<Point, any>);
    private initFromString;
    private initFromFeature;
    getDescr(): string;
    getAddress(): string;
    isValid(): boolean;
}
