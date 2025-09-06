[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@locatienet/api-client](../README.md) / Address

# Type Alias: Address

> **Address** = `object`

Defined in: [generated/models/Address.ts:8](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Address.ts#L8)

Represents the address of a geographical object. Where a string, such as a city or street name, is available in multiple languages, it is returned in the default language specified by the object's location, i.e. in which country it is located. Because addressing schemes vary strongly between countries, most fields are optional.

## Properties

### city?

> `optional` **city**: `string` \| `null`

Defined in: [generated/models/Address.ts:28](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Address.ts#L28)

The city of the address,

***

### country?

> `optional` **country**: `string` \| `null`

Defined in: [generated/models/Address.ts:36](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Address.ts#L36)

Country code according to ISO 3166-1 alpha-2. Defaults to NL. The search will be restricted to this country. When empty, all countries contained in the geocoding data will be included in the search.

***

### district?

> `optional` **district**: `string` \| `null`

Defined in: [generated/models/Address.ts:24](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Address.ts#L24)

The district of the address, i.e. the entity below city.

***

### houseNr?

> `optional` **houseNr**: `string` \| `null`

Defined in: [generated/models/Address.ts:20](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Address.ts#L20)

The HouseNr of the address

***

### postcode?

> `optional` **postcode**: `string` \| `null`

Defined in: [generated/models/Address.ts:12](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Address.ts#L12)

The postal code of the address.

***

### province?

> `optional` **province**: `string` \| `null`

Defined in: [generated/models/Address.ts:32](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Address.ts#L32)

The name of the principal country subdivision which the address belongs to

***

### street?

> `optional` **street**: `string` \| `null`

Defined in: [generated/models/Address.ts:16](https://github.com/locatienetbv/Locatienet-js/blob/cc7659c999a1f81798796e59b56febfa80f02dcd/packages/api-client/src/generated/models/Address.ts#L16)

The street name of the address
