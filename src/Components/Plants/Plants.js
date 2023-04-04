import "./Plants.css";
import PlantCard from "../PlantCard/PlantCard";
import NavBar from '../NavBar/NavBar'

const Plants = ({ plants, heading, growzone, addToGarden, deleteFromGarden }) => {
  const makeCards = () => {
    return plants.map((plant) => <PlantCard key={plant.id} id={plant.id} name={plant.name} img={plant.image} growzone={growzone} addToGarden={addToGarden} deleteFromGarden={deleteFromGarden} />)
  };

  return (
    <section className="plants-page">
      <NavBar />
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
