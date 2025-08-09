import {gql} from "graphql-request";

export const getCountries = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;