import type {Country} from "../graphql/types/country.ts";
import CountryList from "./CountryList";

interface Props {
    countries: Country[];
}

export default function CountryListByContinent({countries}: Props) {

    if (!countries || countries.length == 0) return <p>No countries available!</p>

    return <CountryList countries={countries}/>
}