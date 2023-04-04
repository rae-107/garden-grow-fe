import "./UserProfile.css"
import NavBar from "../NavBar/NavBar"
import { LOAD_USER } from "../../Graphql/Queries"
import { useLazyQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const UserProfile = (name, id, zone) => {
  const [loadUser, {loading, error, data}] = useLazyQuery(LOAD_USER)
  const [user, setUser] = useState({})
  // const [userZone, setUserZone] = useState("")
  useEffect(() => {
    if(data) {
      setUser(data.userDetails)
      // setUserZone(data.userDetails.zone)
    }
  }, [loading, error, data])

  return (
    <section className="profile-page">
      <NavBar />
      <img src={user.img} alt="User Profile"></img>
      <h1 className="profile-name">
        {user.name}
      </h1>
      <div className="socials">
        <Link to={`${user.linkedIn}`}>LinkedIn</Link>
        <Link to={`${user.github}`}>Github</Link>
        <p>{user.email}</p>
      </div>
      <article className="aboutMe">
        <p>My Growzone: {user.growZone}</p>
        <p>{user.aboutMe}</p>
      </article>
    </section>
  );
}
export default UserProfile