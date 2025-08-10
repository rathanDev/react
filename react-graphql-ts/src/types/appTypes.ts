export type Language = {
    code: string;
    name: string;
    native: string;
}

export type Continent = {
    code: string;
    name: string;
}

export type Country = {
    __typename?: "Country" | undefined;
    code: string;
    name: string;
    native: string;
    phone: string;
    capital?: string | null | undefined;
    currency?: string | null | undefined;
    emoji: string;
    emojiU: string;
    continent: Continent;
    languages: Language[];
};

export type CountriesResponse = {
    countries: Country[]
}
