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
query ($vegetableId: String! $zoneDetails: String!){
  vegetableDetails(
      vegetableId: "5",
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
         zone: "6a"
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