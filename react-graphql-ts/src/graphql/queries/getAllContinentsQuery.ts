import {gql} from "graphql-request";

export const getAllContinentsQuery = gql`
    query GetAllContinents {
        continents {
            code 
            name
        }
    }
`