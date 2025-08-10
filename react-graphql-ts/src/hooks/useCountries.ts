import {useEffect, useState} from "react";
import type {Country} from "../types/appTypes";
import {gqlClient} from "../graphql/gqlClient";
// import {getCountriesByContinentQuery} from "../graphql/queries/getCountriesByContinentQuery";
import {GetCountriesByContinentDocument} from "../graphql/queries/generated/graphql";

export function useCountries(continentCode?: string | null) {
    const [data, setData] = useState<Country[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        console.log("ContinentCode", continentCode)
        if (!continentCode) {
            setData(null);
            setLoading(false);
            setError(null);
            return;
        }

        let isMounted = true;
        setLoading(true);
        setError(null);

        const fetchCountries = async () => {
            try {
                const res = await gqlClient.request<{ countries: Country[] }>(
                    GetCountriesByContinentDocument,
                    {continentCode}
                );
                if (isMounted) {
                    setData(res.countries);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err as Error);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchCountries();

        return () => {
            isMounted = false;
        };
    }, [continentCode]);

    return {data, loading, error} as const;
}
