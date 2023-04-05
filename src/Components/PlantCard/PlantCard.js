import { Link } from "react-router-dom";
import "./PlantCard.css";
// import { useState } from "react";

const PlantCard = ({ id, name, img,  growzone, addToGarden, deleteFromGarden, plantAdded }) => {
  // const [plantAdded, setPlantAdded] =useState(false)
  // const [savePlant, setSavePlant] = useState([])

  // const addToGarden = (id) => {
  //   if(!savePlant.includes(Number(id))) {
  //     setSavePlant([...savePlant])
  //     console.log("saved list",savePlant)
  //     // const savedList = plants.filter(savedPlant => savedPlant.id === id)
  //     // return setSavePlant(previousList => [...previousList, savedList[0]])
  //   }
  //   setPlantAdded(true)
  // }

  // const deleteFromGarden = (id) => {
  //   if(savePlant.includes(id)) {
  //     // const updateList = plants.reduce((arr, plant, index) => {
  //     //   if(plant.id === id) {
  //     //     arr.splice(index, 1)
  //     //   }
  //     //   return arr
  //     // // })
  //     // return setSavePlant(updateList)
  //   }
  //   setPlantAdded(false)
  // }

  return (
      <div className="plant-card">
        <Link to={`/vegetable/${growzone}/${id}`}>
        <img
          alt={`Click for more information about ${name}`}
          src={`/Assets/${img}`}
          className="card-image"
        />
        <h2 className="card-title">{name}</h2>
        {plantAdded ? <button onClick={()=> deleteFromGarden()} className="update-my-garden-button">- from my garden</button> :  <button onClick={()=> addToGarden()} className="update-my-garden-button">+ to my garden</button> 
        }
        </Link>
      </div>
  );
}
export default PlantCard;
