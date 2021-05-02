import { gql } from '@apollo/client';

export const GEOCODE = gql`
  query($address: String!) {
    geocode(address: $address) {
      address
      latitude
      longitude
    }
  }
`;
