import "./Plants.css";
import PlantCard from "../PlantCard/PlantCard";
import PropTypes from 'prop-types'

const Plants = ({ plants, heading, growzone }) => {
  const makeCards = () => {
    return plants.map((plant) => <PlantCard key={plant.id} id={plant.id} name={plant.name} img={plant.image} growzone={growzone}/>)
  };

  return (
    <section className="plants-page">
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
  heading: PropTypes.object.isRequired,
  growzone: PropTypes.string.isRequired
}