import {useEffect, useState} from "react";
import {client} from "../grahqlClient";
import {getCountries} from "../queries/getCountries.ts";

type Country = {
    code: string;
    name: string;
    emoji: string;
};

export default function CountryList() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.request<{ countries: Country[] }>(getCountries)
            .then(data => {
                setCountries(data.countries)
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p> Loading...</p>
    }

    return (
        <ul>
            {countries.map((country, i) => (
                <li key={i}>
                    <strong>{country.name}</strong> - {country.emoji}
                </li>
            ))}
        </ul>
    );
}