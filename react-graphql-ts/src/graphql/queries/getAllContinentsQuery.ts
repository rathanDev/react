import {gql} from "graphql-request";

export const getAllContinentsQuery = gql`
    query GetContinents {
        continents {
            code 
            name
        }
    }
`