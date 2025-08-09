import {gql} from 'graphql-request';

export const getCountriesByContinentQuery = gql`
  query GetCountries($continentCode: String!) {
    countries(filter: { continent: { eq: $continentCode } }) {
      code
      name
      native
      phone
      capital
      currency
      emoji
      emojiU
      continent {
        code
        name
      }
      languages {
        code
        name
        native
      }
    }
  }
`;