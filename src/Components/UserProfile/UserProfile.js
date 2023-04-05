import "./UserProfile.css";
import NavBar from "../NavBar/NavBar";
import { LOAD_USER } from "../../Graphql/Queries";
import { useQuery } from "@apollo/client";
// import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const UserProfile = ({ name, id, zone }) => {
  // const {loading, error, data} = useQuery
  const { data } = useQuery(LOAD_USER, {
    variables: { userId: id },
  });
  console.log("here data", data);

  return (
    // <h1>Hi hello</h1>
    <section className="profile-page">
      <NavBar />
      <section className="user-image-container">
        <img src={data?.userDetails?.image} alt="User Profile"></img>
      </section>
      <section className="socials">
        <h1 className="profile-name">{data?.userDetails?.name}</h1>
        <article className="aboutMe">
          {/* <p>My Growzone: {data}</p> */}
          <p>{data?.userDetails?.aboutMe}</p>
        </article>
        <Link to={`${data?.userDetails?.linkedIn}`}>LinkedIn</Link>
        <br></br>
        <Link to={`${data?.userDetails?.github}`}>Github</Link>
        <p>{data?.userDetails?.email}</p>
      </section>
    </section>
  );
};
export default UserProfile;
