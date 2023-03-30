import { gql } from "@apollo/client";

export const LOAD_PLANTS = gql`
  query ($zipcode: String!){
    vegetablesByZipcode(
        zipcode: $zipcode
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
