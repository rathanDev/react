import {gql} from 'graphql-request';

export const getCountriesByContinent = gql`
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