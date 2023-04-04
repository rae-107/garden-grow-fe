import "./UserProfile.css"
import NavBar from "../NavBar/NavBar"
import { LOAD_USER } from "../../Graphql/Queries"
import { useLazyQuery } from "@apollo/client"
import { useEffect, useState } from "react"

const UserProfile = (name, id, zone) => {
  const [loadUser, {loading, error, data}] = useLazyQuery(LOAD_USER)
  const [userID, setUserID] = useState("")
  const [userZone, setUserZone] = useState("")
  useEffect(() => {
    if(data) {
      setUserID(data.userDetails.userId)
      setUserZone(data.userDetails.zone)
    }
  }, [loading, error, data])

  return (
    <section className="profile-page">
      <NavBar />
      {/* <img></img> */}
      <h1 className="profile-name">
        {name}
      </h1>
      
      <section className="plants-display-grid">
        {/* {makeCards()} */}
      </section>
    </section>
  );
}
export default UserProfile