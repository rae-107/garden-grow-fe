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
query vegetableDetails($vegetableId: String!, $zone: String!){
  vegetableDetails(
      vegetableId: $vegetableId
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
      zone: $zone
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
// export const LOAD_USER = gql`
// query userDetails{
//   userDetails(
//       userId: "1"
//       ) {
//          name
//   }
// }
// `





export const LOAD_USER = gql`
query userDetails($userId:String!){
  userDetails(
      userId: $userId
      ) {
        id
         name
         growZone
         img
         linkedIn
         github
         email
         aboutMe
         vegetableUsers{
          id
            vegetable{
                id
                name
                image
            }
         }
  }
}
`