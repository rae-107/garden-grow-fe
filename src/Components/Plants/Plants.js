import "./Plants.css";
import PlantCard from "../PlantCard/PlantCard";
import PropTypes from 'prop-types'
import NavBar from '../NavBar/NavBar'
import { useEffect } from "react";
import beetLogo from "../../Images/beet3_720.png"
import { Link } from "react-router-dom";
import { SAVE_PLANT } from "../../Graphql/Mutations";
import { useMutation } from "@apollo/client";
import { LOAD_USER } from "../../Graphql/Queries";

const Plants = ({ plants, heading, growzone, loadPlants, zipcode, userId, saveIcon, userSavedList }) => {

  const [createVegetableUser, { error2 }] = useMutation(SAVE_PLANT, {
    refetchQueries:[{query: LOAD_USER, 
    variables: { userId: userId}}]
  })
  
  // userSavedList.forEach(plant=> {
  //   console.log("this is the pllaaannntttt", plant, veggieId)
  //  if(plant.vegetable.id !== veggieId) {
  // })
  const addVegetable = (veggieId) => {
       createVegetableUser({
         variables: {
           userId: userId,
           vegetableId: veggieId
         }
       })
       if(error2) {
         console.log("this is mutation error", error2)
       }
}

  const makeCards = () => {
    return plants.map((plant) => <PlantCard key={plant.id} id={plant.id} name={plant.name} img={plant.image} growzone={growzone} userID={userId} createVegetableUser={addVegetable} saveIcon={saveIcon} />)
  };

  useEffect(() => {
    loadPlants({ variables: { zipcode: zipcode } })
    // eslint-disable-next-line
  }, [])

  return (
    <section className="plants-page">
      <section className='logo-box'>
      <NavBar />
      <Link to="/">
      <img className="beet-logo" src={beetLogo} alt='beet'/>
      </Link>
      </section>
      <h1 className="plants-title">
        {heading}
      </h1>
      <section className="plants-display-grid">
        {makeCards()}
      </section>
    </section>
  );
};

export default Plants;

Plants.propTypes = {
  plants: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  growzone: PropTypes.string.isRequired
}