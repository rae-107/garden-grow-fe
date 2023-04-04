import "./UserProfile.css"
import NavBar from "../NavBar/NavBar"
import { LOAD_USER } from "../../Graphql/Queries"
import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const UserProfile = ({name, id, zone}) => {
  const {loading, error, data} = useQuery(LOAD_USER, {
    variables: { userId: id, zone: zone },
  })
  console.log("data", data)
  // const [user, setUser] = useState({})
  // // const [userZone, setUserZone] = useState("")
  // useEffect(() => {
  //   console.log("data", data.userDetails)
  //   if(data) {
  //     setUser(data.userDetails)
  //     // setUserZone(data.userDetails.zone)
  //   }
  // }, [loading, error, data])

  return (
    <section className="profile-page">
      <NavBar />
      <img src={data.userDetails.img} alt="User Profile"></img>
      <h1 className="profile-name">
        {data.name}
      </h1>
      <div className="socials">
        <Link to={`${data.userDetails.linkedIn}`}>LinkedIn</Link>
        <Link to={`${data.userDetails.github}`}>Github</Link>
        <p>{data.email}</p>
      </div>
      <article className="aboutMe">
        <p>My Growzone: {data.userDetails.growZone}</p>
        <p>{data.userDetails.aboutMe}</p>
      </article>
    </section>
  );
}
export default UserProfile