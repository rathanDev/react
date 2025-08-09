import type {Country} from "../types/country";
import CountryItem from "./CountryItem";

interface Props {
    countries: Country[];
}

export default function CountryList({countries}: Props) {
    return (
        <>
            {countries.map((country) => (
                <CountryItem key={country.code} country={country}/>
            ))}
        </>
    );
}