import {GraphQLClient} from "graphql-request";

export const gqlClient = new GraphQLClient(
    'https://countries.trevorblades.com/',
    {
        headers: {
            // Optional: Add auth headers or other custom headers
        },
    }
);