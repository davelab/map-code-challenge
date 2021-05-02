import { gql } from '@apollo/client';

export const CREATE_JOB = gql`
  mutation($pickup: String!, $dropoff: String!) {
    job(pickup: $pickup, dropoff: $dropoff) {
      pickup {
        address
      }
      dropoff {
        address
      }
    }
  }
`;
