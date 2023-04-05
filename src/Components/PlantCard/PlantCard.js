import { Link } from "react-router-dom";
import "./PlantCard.css";
import { useState } from "react";
import { useEffect } from "react";

function PlantCard({ id, name, img, growzone, createVegetableUser, destroyVegetableUser, destroyId, saveIcon }) {
  const [currentSaveStatus, setCurrentSaveStatus] = useState(null)
  const [icon, setIcon] = useState("")
  useEffect(() => {
    // toggleCurrent()
    toggleButton()
  })
  
  const toggleButton = () => {
   return currentSaveStatus ? setIcon("-") : setIcon("+")
    
  }
  const toggleCurrent = () => {
    setCurrentSaveStatus(!currentSaveStatus)
  }
  const handleClick = () => {
    toggleCurrent()
  if(!saveIcon) {
    // setCurrentSaveStatus(true)
    
    createVegetableUser(id)
    console.log("save is firing")
  } else {
    
    // setCurrentSaveStatus(false)
    destroyVegetableUser(destroyId)
    console.log("delete is firing")
  }

}

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
        <button onClick={(event) => {
          event.preventDefault()
          handleClick()
        }}>
          {saveIcon ? <p>- from my garden</p> : <p>+ to my garden</p>}
        </button>
      </div>
  );
}
export default PlantCard;

// {saveIcon ? <p>{`${icon} from my garden`}</p> : <p>{`${icon} to my garden`}</p>}
