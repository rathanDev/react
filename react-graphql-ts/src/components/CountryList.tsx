import type {Country} from "../types/appTypes";
import CountryItem from "./CountryItem";

interface Props {
    countries: Country[];
}

export default function CountryList({countries}: Props) {
    if (!countries || countries.length == 0) return <p>No countries available!</p>
    return (
        <>
            {countries.map((country) => (
                <CountryItem key={country.code} country={country}/>
            ))}
        </>
    );
}