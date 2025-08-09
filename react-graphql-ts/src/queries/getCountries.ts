import {gql} from "graphql-request";

export const getCountries = gql`
  query {
      countries {
        name
        capital
        population
        region
        languages {
          name
        }
        currencies {
          name
          symbol
        }
        flag
      }
  }
`;