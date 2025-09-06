[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@locatienet/api-client](../README.md) / Location

# Type Alias: Location

> **Location** = `object`

Defined in: [generated/models/Location.ts:9](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L9)

Represents a geographical object in terms of its position and its address.

## Properties

### city?

> `optional` **city**: `string` \| `null`

Defined in: [generated/models/Location.ts:29](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L29)

The city of the address,

***

### coordinate?

> `optional` **coordinate**: [`Coordinate`](Coordinate.md)

Defined in: [generated/models/Location.ts:38](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L38)

***

### country?

> `optional` **country**: `string` \| `null`

Defined in: [generated/models/Location.ts:37](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L37)

Country code according to ISO 3166-1 alpha-2. Defaults to NL. The search will be restricted to this country. When empty, all countries contained in the geocoding data will be included in the search.

***

### description?

> `optional` **description**: `string` \| `null`

Defined in: [generated/models/Location.ts:51](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L51)

A single string representing the address, typically consisting of the street, house number, postal code, city, and country. The precise format may differ based on what is appropriate for the address.

***

### distance?

> `optional` **distance**: `number` \| `null`

Defined in: [generated/models/Location.ts:47](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L47)

A radius that specifies how close the route shall pass by the specified coordinate, only to be used with via waypoints. This radius refers to the distance on the road network in meters.
When set there is no output waypoint. The route passes near the specified coordinate.

***

### district?

> `optional` **district**: `string` \| `null`

Defined in: [generated/models/Location.ts:25](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L25)

The district of the address, i.e. the entity below city.

***

### houseNr?

> `optional` **houseNr**: `string` \| `null`

Defined in: [generated/models/Location.ts:21](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L21)

The HouseNr of the address

***

### postcode?

> `optional` **postcode**: `string` \| `null`

Defined in: [generated/models/Location.ts:13](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L13)

The postal code of the address.

***

### province?

> `optional` **province**: `string` \| `null`

Defined in: [generated/models/Location.ts:33](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L33)

The name of the principal country subdivision which the address belongs to

***

### score?

> `optional` **score**: `number`

Defined in: [generated/models/Location.ts:42](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L42)

Indicates the overall match quality for a geocoding request. 100 (percent) represents a perfect match between the input and the result.

***

### street?

> `optional` **street**: `string` \| `null`

Defined in: [generated/models/Location.ts:17](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Location.ts#L17)

The street name of the address
