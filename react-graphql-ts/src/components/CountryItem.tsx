import React from "react";
import type {Country} from "../types/country.ts";

interface Props {
    country: Country
}

export default function CountryItem({country}: Props) {
    return (
        <li>
            <strong>{country.name}</strong> ({country.native}) - {country.capital} {country.emoji}
            <br/>
            Currency: {country.currency ?? "NA"}, Phone: +{country.phone}
            <br/>
            Languages: {country.languages.map((lang) => lang.name).join(", ") || "None"}
        </li>
    )
}