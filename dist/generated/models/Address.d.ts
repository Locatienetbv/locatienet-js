/**
 * Represents the address of a geographical object. Where a string, such as a city or street name, is available in multiple languages, it is returned in the default language specified by the object's location, i.e. in which country it is located. Because addressing schemes vary strongly between countries, most fields are optional.
 */
export type Address = {
    /**
     * The postal code of the address.
     */
    postcode?: string | null;
    /**
     * The street name of the address
     */
    street?: string | null;
    /**
     * The HouseNr of the address
     */
    houseNr?: string | null;
    /**
     * The district of the address, i.e. the entity below city.
     */
    district?: string | null;
    /**
     * The city of the address,
     */
    city?: string | null;
    /**
     * The name of the principal country subdivision which the address belongs to
     */
    province?: string | null;
    /**
     * Country code according to ISO 3166-1 alpha-2. Defaults to NL. The search will be restricted to this country. When empty, all countries contained in the geocoding data will be included in the search.
     */
    country?: string | null;
};
//# sourceMappingURL=Address.d.ts.map