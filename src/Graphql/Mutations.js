import { gql } from "@apollo/client"
export const SAVE_PLANT = gql` 
mutation createVegetableUser($userId:String!, $vegetableId:String!){
  createVegetableUser(input:{
      userId: $userId,
      vegetableId: $vegetableId
  }) {
      id
      userId
      vegetableId
  }
}
`

export const DELETE_PLANT = gql`
mutation destroyVegetableUser($vegetableUserId:String!){
  destroyVegetableUser(input:{
      vegetableUserId: $vegetableUserId
  }) {
      id
      userId
      vegetableId
  }
}
`