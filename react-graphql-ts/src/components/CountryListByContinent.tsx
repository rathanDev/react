import {useEffect, useState} from "react";
import type {CountriesResponse, Country} from "../types/country.ts";
import {client} from "../grahqlClient";
import {getCountriesByContinent} from "../queries/getCountriesByContinent";

interface Props {
    continentCode: string;
}

export default function CountryListByContinent({continentCode}: Props) {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        client.request<CountriesResponse>(getCountriesByContinent, {
            continentCode: continentCode,
        }).then((data) => {
            console.log("Fetched countries", data)
            setCountries(data?.countries ?? []);
            setLoading(false);
        })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }, [continentCode]);

    if (loading) return <p>Loading...</p>

    return (
        <ul>
            {countries.map((country) => (
                <li key={country.code}>
                    <strong>{country.name}</strong> ({country.native}) - {country.capital} 🇨🇭 {country.emoji}
                    <br/>
                    Currency: {country.currency ?? 'NA'}, Phone: +{country.phone}
                    <br/>
                    Languages: {country.languages.map((lang) => lang.name).join(', ') || 'None'}
                </li>
            ))}
        </ul>
    )
}