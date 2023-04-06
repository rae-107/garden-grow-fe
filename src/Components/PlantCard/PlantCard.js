import { Link } from "react-router-dom";
import "./PlantCard.css";

function PlantCard({
  id,
  name,
  img,
  growzone,
  createVegetableUser,
  destroyVegetableUser,
  destroyId,
  saveIcon,
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
      <button
        className="update-my-garden-button"
        onClick={(event) => {
          event.preventDefault();
          handleClick();
        }}
      >
        {saveIcon ? <p>- from my garden</p> : <p>+ to my garden</p>}
      </button>
    </div>
  );
}
export default PlantCard;
