import {useEffect, useState} from "react";
import type {CountriesResponse, Country} from "../types/country.ts";
import {client} from "../grahqlClient";
import {getCountriesByContinent} from "../queries/getCountriesByContinent";
import Loading from "./Loading"
import CountryList from "./CountryList";
import React from "react";

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

    if (loading) return <Loading/>

    return <CountryList countries={countries}/>
}