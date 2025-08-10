import {useQuery} from '@tanstack/react-query';
import {gqlClient} from '../graphql/gqlClient';
import {GetCountriesByContinentDocument} from '../graphql/queries/generated/graphql';

export function useCountries(continentCode: string) {
    return useQuery({
        queryKey: ['countriesByContinent', continentCode],
        queryFn: async () => {
            const res = await gqlClient.request(GetCountriesByContinentDocument, {continentCode});
            console.log('CountriesByContinent res', res);
            return res.countries;
        }
    });
}

// export function useCountries(continentCode: string) {
//     const [data, setData] = useState<Country[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<Error | null>(null);
//
//     useEffect(() => {
//         console.log("ContinentCode", continentCode)
//         if (!continentCode) {
//             setData([]);
//             setLoading(false);
//             setError(null);
//             return;
//         }
//
//         let isMounted = true;
//         setLoading(true);
//         setError(null);
//
//         const fetchCountries = async () => {
//             try {
//                 const res = await gqlClient.request<{ countries: Country[] }>(
//                     GetCountriesByContinentDocument,
//                     {continentCode}
//                 );
//                 if (isMounted) {
//                     setData(res.countries);
//                 }
//             } catch (err) {
//                 if (isMounted) {
//                     setError(err as Error);
//                 }
//             } finally {
//                 if (isMounted) {
//                     setLoading(false);
//                 }
//             }
//         };
//
//         fetchCountries();
//
//         return () => {
//             isMounted = false;
//         };
//     }, [continentCode]);
//
//     return {data, loading, error} as const;
// }
