import "./UserProfile.css";
import xLogo from "../../Images/x-vector.png";
import { LOAD_USER } from "../../Graphql/Queries";
import { SAVE_PLANT } from "../../Graphql/Mutations";
import { useMutation, useQuery } from "@apollo/client";
import PlantCard from "../PlantCard/PlantCard";
// import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import ErrorPage from "../ErrorPage/ErrorPage"
import { useState } from "react";
import { useEffect } from "react";

const UserProfile = ({ id, addToGarden, deleteFromGarden }) => {
  // const {loading, error, data} = useQuery
  const { loading, data } = useQuery
  (LOAD_USER, 
    {
    variables: { userId: id },
  });

  console.log("look here", data?.userDetails?.id)

  const [createVegetableUser, { error }] = useMutation(SAVE_PLANT)

  const addVegetable = () => {
    createVegetableUser({
      variables: {
        userId: "7",
        vegetableId: "1"
      }
    })
    console.log("create vegetable is firing")
    if(error) {
      console.log("this is mutation error", error)
    }
  }

  
  // createVegetableUser = {
  //   variables: { userId: "1", vegetableId: "1"}
  // }
  console.log("here data", data);
  console.log("here veg", data);
  // console.log("save try", data2)
  // console.log("kksn", createVegetableUser)
  const savedTitles = ["Arugula", "Beets"]
  // const [saveIcon, setSaveIcon] = useState(false)
  // const [deleteIcon, setDeleteIcon] = useState(false)
  // console.log("function log", addToGarden)


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
          {/* {data?.userDetails?.vegetableUsers.map((plant) => <h3>{plant.vegetable.id}</h3>)} */}
          {data?.userDetails?.vegetableUsers.map((plant) => <PlantCard key={plant.vegetable.id} id={plant.vegetable.id} name={plant.vegetable.name} img={plant.vegetable.image} addToGarden={addToGarden} deleteFromGarden={deleteFromGarden} savedTitles={savedTitles} userID={"7"} createVegetableUser={addVegetable} />) }
        </section>
      </section>
    </section>
  );
};
export default UserProfile;
