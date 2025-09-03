/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Boundaries are used for defining the minimal boundary rectangle of a geographical object. It contains the minimum and maximum values for x and y dimension.
 */
export type BoundingBox = {
    /**
     * Minimum value for x dimension. The numerical value has to be less than or equal to maxX.
     */
    minX?: number;
    /**
     * Maximum value for x dimension. The numerical value has to be greater than or equal to minX.
     */
    maxY?: number;
    /**
     * Minimum value for y dimension. The numerical value has to be less than or equal to maxY.
     */
    maxX?: number;
    /**
     * Maximum value for y dimension. The numerical value has to be greater than or equal to minY.
     */
    minY?: number;
};

