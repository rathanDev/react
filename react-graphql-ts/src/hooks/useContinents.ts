import {useQuery} from '@tanstack/react-query';
import type {Continent} from '../types/appTypes';
import {gqlClient} from '../graphql/gqlClient';
import {GetAllContinentsDocument} from '../graphql/queries/generated/graphql';

export function useContinents() {
    return useQuery<Continent[], Error>({
        queryKey: ['continents'],
        queryFn: async () => {
            const res = await gqlClient.request(GetAllContinentsDocument);
            console.log('Res', res);
            return res.continents;
        }
    });
}


// export function useContinents() {
//     const [data, setData] = useState<Continent[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<Error | null>(null);
//
//     useEffect(() => {
//         let isMounted = true;
//
//         const fetchContinents = async () => {
//             setLoading(true);
//             try {
//                 const res = await gqlClient.request<{ continents: Continent[] }>(
//                     GetAllContinentsDocument
//                 );
//                 console.log("ContinentsResponse", res)
//                 if (isMounted) {
//                     setData(res.continents);
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
//         fetchContinents();
//
//         return () => {
//             isMounted = false;
//         };
//     }, []);
//
//     return {data, loading, error} as const;
// }
