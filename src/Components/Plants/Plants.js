import "./Plants.css";
import PlantCard from "../PlantCard/PlantCard";
import PropTypes from 'prop-types'
import NavBar from '../NavBar/NavBar'
import { useEffect } from "react";
import beetLogo from "../../Images/beet3_720.png"
import { Link } from "react-router-dom";

const Plants = ({ plants, heading, growzone, loadPlants, zipcode }) => {
  const makeCards = () => {
    return plants.map((plant) => <PlantCard key={plant.id} id={plant.id} name={plant.name} img={plant.image} growzone={growzone}  />)
  };

  useEffect(() => {
    loadPlants({ variables: { zipcode: zipcode } })
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