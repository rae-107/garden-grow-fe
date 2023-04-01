import { gql } from "@apollo/client";

export const LOAD_PLANTS = gql`
  query vegetablesByZipcode($zipcode: String!){
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
export const LOAD_VEGETABLE = gql`
query vegetableDetails($vegetableId: String! $zoneDetails: String!){
  vegetableDetails(
      vegetableId: $vegetableId,
      zoneDetails: $zoneDetails
  ) {
     name
     description
     sun
     water
     rowSpacing
     seedSpacing
     growingDuration
     image
     zoneDetails(
         zone
         ) {
              plantSeedsIndoorsStart
              plantSeedsIndoorsEnd
              plantSeedlingsStart
              plantSeedlingsEnd
              plantSeedsOutdoorsStart
              plantSeedsOutdoorsEnd
     }
  }
}
`