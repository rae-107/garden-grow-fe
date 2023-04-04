import "./UserProfile.css"
import NavBar from "../NavBar/NavBar"
import { LOAD_USER } from "../../Graphql/Queries"
import { useLazyQuery } from "@apollo/client"
import { useEffect, useState } from "react"

const UserProfile = () => {
  const [loadUser, {loading, error, data}] = useLazyQuery(LOAD_USER)
  const [user, setUser] = useState({})
  useEffect(() => {
    if(data) {
      setUser(data.userDetails)
    }
  }, [loading, error, data])
}
export default UserProfile