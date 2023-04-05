import "./UserProfile.css";
import xLogo from "../../Images/x-vector.png";
import { LOAD_USER } from "../../Graphql/Queries";
import { useQuery } from "@apollo/client";
// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ErrorPage from "../ErrorPage/ErrorPage"

const UserProfile = ({ name, id, zone }) => {
  // const {loading, error, data} = useQuery
  const { error, data } = useQuery
  (LOAD_USER, 
    {
    variables: { userId: id },
  }
  )
  console.log("here data", data)

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
      </section>
    </section>
  );
};
export default UserProfile;
