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
export const LOAD_VEGETABLE = gpl `
query ($vegetableId: String! zoneDetails.zone: String!){
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