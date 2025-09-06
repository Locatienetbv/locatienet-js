[**Documentation**](../../../README.md)

***

[Documentation](../../../README.md) / [@locatienet/api-client](../README.md) / Api

# Variable: Api

> `const` **Api**: `object`

Defined in: [index.ts:12](https://github.com/locatienetbv/Locatienet-js/blob/603c25287647f8b4b5ac02149bb1ec5caac2e6f0/packages/api-client/src/index.ts#L12)

## Type Declaration

### apikey

> **apikey**: `any`

### calculateRoute()

> **calculateRoute**: (`locations?`, `options?`) => `Promise`\<`RouteInfoFeatureResult`\> = `calculateRouteInfo`

Calculates and returns basic route information and polyline as GeoJSON Feature.

#### Parameters

##### locations?

[`Location`](../type-aliases/Location.md)[]

##### options?

[`RouteOptions`](../type-aliases/RouteOptions.md)

#### Returns

`Promise`\<`RouteInfoFeatureResult`\>

{Promise<RouteInfoFeatureResult>}

### calculateRouteInfo()

> **calculateRouteInfo**: (`locations?`, `options?`) => `Promise`\<`RouteInfoFeatureResult`\>

Calculates and returns basic route information and polyline as GeoJSON Feature.

#### Parameters

##### locations?

[`Location`](../type-aliases/Location.md)[]

##### options?

[`RouteOptions`](../type-aliases/RouteOptions.md)

#### Returns

`Promise`\<`RouteInfoFeatureResult`\>

{Promise<RouteInfoFeatureResult>}

### countries()

> **countries**: () => `Promise`\<`Country`[]\>

Fetch all EU country information, name in different languages and their iso codes

#### Returns

`Promise`\<`Country`[]\>

{Promise<Country[]>}

### locateByAddress()

> **locateByAddress**: (`address`, `options?`) => `Promise`\<`LocateFeatureResult`[]\>

Search for locations using structured address input.

#### Parameters

##### address

[`Address`](../type-aliases/Address.md)

##### options?

[`LocateOptions`](../type-aliases/LocateOptions.md)

#### Returns

`Promise`\<`LocateFeatureResult`[]\>

{Promise<Array<LocateFeatureResult>>}

### locateByPosition()

> **locateByPosition**: (`position`, `options?`) => `Promise`\<`LocateFeatureResult`[]\>

Search for addresses using structured coordinate input.

#### Parameters

##### position

[`Coordinate`](../type-aliases/Coordinate.md) | `Position`

##### options?

[`LocateOptions`](../type-aliases/LocateOptions.md)

#### Returns

`Promise`\<`LocateFeatureResult`[]\>

{Promise<Array<LocateFeatureResult>>}

### locateByText()

> **locateByText**: (`query`, `country?`, `options?`) => `Promise`\<`LocateFeatureResult`[]\>

Search for locations using a free-form text input.

#### Parameters

##### query

`string`

input

##### country?

`string`

##### options?

[`LocateOptions`](../type-aliases/LocateOptions.md)

#### Returns

`Promise`\<`LocateFeatureResult`[]\>

{Promise<Array<LocateFeatureResult>>}
