import * as L from "leaflet";
import { Feature, Point } from "geojson";

export class Address {
    address?: string;
    latLng?: L.LatLng;
    street?: string;
    houseNr?: string;
    postcode?: string;
    city?: string;
    province?: string;
    country?: string;

    constructor(address: string | Feature<Point, any>) {
        if (typeof address === "string") {
            // from encoded string
            this.initFromString(address);
        } else if (address && address.type === "Feature" && address.geometry?.type === "Point") {
            // from GeoJSON feature
            this.initFromFeature(address);
        }
    }

    private initFromString(addressStr: string): void {
        this.address = addressStr;
        const arr = decodeURIComponent(addressStr).split("_");

        this.latLng = new L.LatLng(
            parseFloat(arr[1] || "0"),
            parseFloat(arr[0] || "0")
        );

        this.street = arr[2] || "";
        this.houseNr = arr[3] || "";
        this.postcode = arr[4] || "";
        this.city = arr[5] || "";
        this.province = arr[6] || "";
        this.country = arr[7] || "NL";
    }

    private initFromFeature(feature: Feature<Point, any>): void {
        const coords = feature.geometry.coordinates;
        this.latLng = new L.LatLng(coords[1], coords[0]);

        const props = feature.properties || {};
        this.street = props.street || "";
        this.houseNr = props.houseNr || "";
        this.postcode = props.postcode || "";
        this.city = props.city || "";
        this.province = props.province || "";
        this.country = props.country || "NL";

        // build a string representation
        this.address = this.getAddress();
    }

    getDescr(): string {
        return (
            (this.street + " " + this.houseNr).trim() +
            (this.street ? ", " : "") +
            (this.postcode ? this.postcode + " " : "") +
            this.city
        );
    }

    getAddress(): string {
        if (this.isValid() && this.latLng) {
            return [
                this.latLng.lng,
                this.latLng.lat,
                this.street,
                this.houseNr,
                this.postcode,
                this.city,
                this.province,
                this.country
            ].join("_");
        }
        return "";
    }

    isValid(): boolean {
        return !!this.latLng && this.latLng.lng !== 0 && this.latLng.lat !== 0;
    }
}
