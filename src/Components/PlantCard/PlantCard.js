import { Link } from "react-router-dom";
import "./PlantCard.css";
import { useState } from "react";
import { useEffect } from "react";

const PlantCard = ({ id, name, img,  growzone, addToGarden, deleteFromGarden, savedTitles }) => {
  const [saveIcon, setSaveIcon] = useState(false)

  useEffect(() => {
    checkSaveStatus()
  },[savedTitles])
  
  const checkSaveStatus = () => {
    if(savedTitles.includes(name)) {
      setSaveIcon(true)
    }
  }
  
  const addSave = () => {
    return saveIcon ? addToGarden(name) : undefined
  }

  const removeSave = () => {
    return saveIcon ? deleteFromGarden(name) : undefined
  }

  const handleClick = (status) => {
    setSaveIcon(status)
    addSave()
    removeSave()
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
        {saveIcon ? <button onClick={()=> handleClick(false)} className="update-my-garden-button">- from my garden</button> :  <button onClick={()=> handleClick(true)} className="update-my-garden-button">+ to my garden</button> 
        }
      </div>
  );
}
export default PlantCard;
