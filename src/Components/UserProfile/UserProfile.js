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
  // console.log("data", data, LOAD_USER)
  // const [user, setUser] = useState({})
  // // const [userZone, setUserZone] = useState("")
  useEffect(() => {
    console.log("data", data[0])
    // if(data) {
    //   setUser(data.userDetails)
    //   // setUserZone(data.userDetails.zone)
    // }
  }, [loading, error, data])

  return (
    <section className="profile-page">
      <NavBar />
      <img src={data} alt="User Profile"></img>
      <h1 className="profile-name">
        {data}
      </h1>
      <div className="socials">
        <Link to={`${data}`}>LinkedIn</Link>
        <Link to={`${data}`}>Github</Link>
        <p>{data}</p>
      </div>
      <article className="aboutMe">
        <p>My Growzone: {data}</p>
        <p>{data}</p>
      </article>
    </section>
  );
}
export default UserProfile