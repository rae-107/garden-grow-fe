import "./UserProfile.css";
import xLogo from "../../Images/x-vector.png";
import { LOAD_USER } from "../../Graphql/Queries";
import { SAVE_PLANT } from "../../Graphql/Mutations";
import { DELETE_PLANT } from "../../Graphql/Mutations"
import { useMutation, useQuery } from "@apollo/client";
import PlantCard from "../PlantCard/PlantCard";


import { Link } from "react-router-dom"
import ErrorPage from "../ErrorPage/ErrorPage"
import { useEffect } from "react";

const UserProfile = ({ id, updateUser, plant, setSaveIcon }) => {
  
  // console.log("saveicon", setSaveIcon)
  const { error, data } = useQuery
  (LOAD_USER, 
    {
      variables: { userId: id },
    });
   
// console.log("data is here", data?.userDetails?.vegetableUsers)
// console.log("here is plants", plant)
const [createVegetableUser, { error2 }] = useMutation(SAVE_PLANT)

 const addVegetable = (veggieId) => {
  console.log("i am adding a veggie")
  createVegetableUser({
    variables: {
      userId: id,
      vegetableId: veggieId
    }
  })
  
  if(error2) {
    console.log("this is mutation error", error2)
  }
}
// const userProfile= true
// data?.userDetails?.vegetableUsers.map(plant => {
//   console.log(plant.id)
//   }
// )
const [destroyVegetableUser, { error3 }] = useMutation(DELETE_PLANT, {
  refetchQueries:[{query: LOAD_USER,
    variables: { userId: id }}]
})

const deleteVegetable = (veggieUserId) => {
  destroyVegetableUser({
    variables: {
      vegetableUserId: veggieUserId
    }
  })
}

console.log("rae data", data?.userDetails?.vegetableUsers)
// const checkSavedList = (id) => {
//   data.userDetails.vegetableUsers.forEach(veggie => {
//     if(plant.includes(veggie)) {

//     }
//   })
  // plant.filter(veggies => veggies.id === id)
// }

useEffect(() => {
  updateUser(id)
  // eslint-disable-next-line
}, [data])

  if(error) {
    return (
      <ErrorPage />
    )
  }

  return (
    <section className="profile-page">
      <Link to={`/`}>
        <section className="back-logo-container">
          <img className="x-image-back-button" src={xLogo} alt="logo" />
        </section>
      </Link>
      <section className="user-info-container">
        <section className="user-image-container">
          <img
            className="profile-pic"
            src={`/Assets/${data?.userDetails?.img}`}
            alt="User Profile"
          ></img>
        </section>
        <section className="socials">
          <section className="text">
            <h1 className="profile-name">{data?.userDetails?.name}</h1>
            <article className="aboutMe">
              <p>{data?.userDetails?.aboutMe}</p>
            </article>
            <Link
              className="linked-in"
              to={{
                pathname: data?.userDetails?.linkedIn,
              }}
              target="_blank"
            >
             - Visit my LinkedIn Page
            </Link>
            <br></br>
            <Link
              className="github"
              to={{ pathname: data?.userDetails?.github }}
              target="_blank"
            >
              - Checkout My Work on Github
            </Link>
            <p>{data?.userDetails?.email}</p>
          </section>
        </section>
      </section>
      <section className="users-plants-container">
        <h1>My Garden for GrowZone {data?.userDetails?.growZone}</h1>
        <section className="savedPlantsGrid">
          {data?.userDetails?.vegetableUsers.map((plant, index) => <PlantCard key={index} id={plant.vegetable.id} name={plant.vegetable.name} img={plant.vegetable.image} userID={data?.userDetails?.id} createVegetableUser={addVegetable} destroyId={plant.id} destroyVegetableUser={deleteVegetable} setSaveIcon={setSaveIcon}/>) }
        </section>
      </section>
    </section>
  );
};
export default UserProfile;

 
/*
SaveIcon is a boolean if true then veggie is saved, if false veggie is deleted


*/