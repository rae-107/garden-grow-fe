import { gql } from "@apollo/client";

export const LOAD_PLANTS = gql`
  query{
    vegetablesByZipcode(
        zipcode: 80910
        ) {
           growZone
           vegetables {
               id
               name
               image
           } 
    }
  }
`
