﻿export type Language = {
    code: string;
    name: string;
    native: string;
}

export type Continent = {
    code: string;
    name: string;
}

export type Country = {
    code: string;
    name: string;
    native: string;
    phone: string;
    capital: string;
    currency: string;
    emoji: string;
    emojiU: string;
    continent: Continent;
    languages: Language[];
};

export type CountriesResponse = {
    countries: Country[]
}
