import "./UserProfile.css"
import NavBar from "../NavBar/NavBar"
import { LOAD_USER } from "../../Graphql/Queries"
import { useLazyQuery } from "@apollo/client"

const UserProfile = () => {
  const [loadUser, {loading, error, data}] = useLazyQuery(LOAD_USER)
  
}