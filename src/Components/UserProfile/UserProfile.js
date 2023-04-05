import "./UserProfile.css"
import NavBar from "../NavBar/NavBar"
import { LOAD_USER } from "../../Graphql/Queries"
import { useQuery } from "@apollo/client"
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
    // <h1>Hi hello</h1>
    <section className="profile-page">
      <NavBar />
      <img src={data?.userDetails?.image} alt="User Profile"></img>
      <h1 className="profile-name">
        {data?.userDetails?.name}
      </h1>
      <div className="socials">
        <Link to={`${data?.userDetails?.linkedIn}`}>LinkedIn</Link><br></br>
        <Link to={`${data?.userDetails?.github}`}>Github</Link>
        <p>{data?.userDetails?.email}</p>
      </div>
      <article className="aboutMe">
        {/* <p>My Growzone: {data}</p> */}
        <p>{data?.userDetails?.aboutMe}</p>
      </article>
    </section>
  );
}
export default UserProfile