/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coordinate } from './Coordinate';
import type { ManeuverType } from './ManeuverType';
import type { RoadEvent } from './RoadEvent';
export type RouteDescription = {
    /**
     * The distance of the route from the start up to this description.
     */
    accDistance?: number;
    /**
     * The travel time for the route from the start up to this event.
     */
    accTime?: number;
    /**
     * A descriptive text for the current maneuver.
     */
    description?: string | null;
    /**
     * The city names and road numbers on a signpost at the current location to follow for the current maneuver.
     */
    directions?: string | null;
    /**
     * The name of the current road
     */
    roadName?: string | null;
    /**
     * The road number
     */
    roadNumber?: string | null;
    /**
     * Defines the network class of a road. The road segments are divided into eight network classes by importance of the roads they represent. The network class 0 represents the most important roads, for example highways, while road segments of network class 7 are the least important roads, for example pedestrian paths. Range: 0 ≤ value ≤ 7.
     */
    networkClass?: number | null;
    maneuverType?: ManeuverType;
    event?: RoadEvent;
    country?: string | null;
    coordinate?: Coordinate;
};

