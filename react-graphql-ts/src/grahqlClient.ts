import {GraphQLClient} from "graphql-request";

export const client = new GraphQLClient('https://countries.trevorblades.com/', {
    headers: {
        // Optional: Add auth headers or other custom headers
    },
});