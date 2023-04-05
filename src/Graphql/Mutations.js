import { gql } from "@apollo/client"
export const SAVE_PLANT = gql` 
mutation createVegetableUser($userId:String, $userId:String){
  createVegetableUser(input:{
      userId: $userId,
      vegetableId: $vegetableId
  }
  ) {
      id
      userId
      vegetableId
  }
}
`