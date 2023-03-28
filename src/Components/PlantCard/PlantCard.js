import "./PlantCard.css"
import image from "../../Assets/carrots.jpg"

const PlantCard = () => {
  return(
    <div className="plant-card">
      <img alt="(this will be the name of the plant)" src={image} className="card-image" ></img>
      <h2 className="card-title">Carrots</h2>
      <button className="update-my-garden-button" >+ or - ( depending on state ) to my garden</button>
    </div>
  )
}

export default PlantCard