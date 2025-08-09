import type {Country} from "../graphql/types/country.ts";

interface Props {
    country: Country;
}

export default function CountryItem({country}: Props) {
    return (
        <>
            <br/>
            <table border={1} cellPadding={6} cellSpacing={0}>
                <thead>
                <tr>
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Currency</th>
                    <th>Phone</th>
                    <th>Languages</th>
                    <th>Continent</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{country.emoji} {country.name} ({country.native})</td>
                    <td>{country.capital || "NA"}</td>
                    <td>{country.currency || "NA"}</td>
                    <td>+{country.phone}</td>
                    <td>{country.languages.length > 0 ? country.languages.map(lang => lang.name).join(", ") : "None"}</td>
                    <td>{country.continent.name} ({country.continent.code})</td>
                </tr>
                </tbody>
            </table>
        </>
    );
}