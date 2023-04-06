import { Link } from "react-router-dom";
import "./PlantCard.css";
import PropTypes from "prop-types";

function PlantCard({
  id,
  name,
  img,
  growzone,
  createVegetableUser,
  destroyVegetableUser,
  destroyId,
  saveIcon,
  isLoggedIn,
}) {

  const handleClick = () => {
    if (!saveIcon) {
      createVegetableUser(id);
    } else {
      destroyVegetableUser(destroyId);
    }
  };

  return (
    <div className="plant-card">
      <Link to={`/vegetable/${growzone}/${id}`}>
        <img
          alt={`Click for more information about ${name}`}
          src={`/Assets/${img}`}
          className="card-image"
        />
        <h2 className="card-title">{name}</h2>
      </Link>
      {isLoggedIn ? (
        <button
          className="update-my-garden-button"
          onClick={(event) => {
            event.preventDefault();
            handleClick();
          }}
        >
          {saveIcon ? <p>- from my garden</p> : <p>+ to my garden</p>}
        </button>
      ) : null}
    </div>
  );
}
export default PlantCard;

PlantCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  growzone: PropTypes.number,
  createVegetableUser: PropTypes.func.isRequired,
  destroyVegetableUser: PropTypes.func.isRequired,
  destroyId: PropTypes.number,
  saveIcon: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};
