/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoundingBox } from './BoundingBox';
export type MapResponse = {
    /**
     * The image as a byte array.
     */
    image?: string | null;
    bounds?: BoundingBox;
    /**
     * The zoom level of the map image.
     */
    zoom?: number;
};

