import {useEffect, useState} from "react";
import type {Continent} from "../types/appTypes";
import {gqlClient} from "../graphql/gqlClient";
import {getAllContinentsQuery} from "../graphql/queries/getAllContinentsQuery";

export function useContinents() {
    const [data, setData] = useState<Continent[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchContinents = async () => {
            setLoading(true);
            try {
                const res = await gqlClient.request<{ continents: Continent[] }>(
                    getAllContinentsQuery
                );
                console.log("Res", res)
                if (isMounted) {
                    setData(res.continents);
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

        fetchContinents();

        return () => {
            isMounted = false;
        };
    }, []);

    return {data, loading, error} as const;
}
