import "./Plant.css";
import xLogo from "../../Images/x-vector.png"
import { LOAD_VEGETABLE } from "../../Graphql/Queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

//useEffect for Load_vegetables 


const Plant = ({ id, growzone }) => {
  // const [loadCurrentPlant, { error, data }] = useQuery(LOAD_VEGETABLE, {variables: { vegetableId:id, zone: growzone }});
  console.log('what dis', id, growzone)
  
  const { loading, error, data } = useQuery(LOAD_VEGETABLE, {variables: { vegetableId:id, zone:growzone }});

useEffect(() => {
  console.log(error)
  console.log(data)
}, [loading])
  return (
    <main className="plant-details-container">
      <section className='back-logo'>
        <img className='x-image' src={xLogo} alt='logo'/>
      </section>
      <h1 className="plant-title">{data?.vegetableDetails?.name}</h1>
      <section className="plant-image">
        <img className="large-plant-img" src={`../Assets/${data?.vegetableDetails?.image}`} alt="plant" />
      </section>
      <section className="plant-details-text">
        <p className="plant-description">
          {data?.vegetableDetails?.description} </p>
      </section>
      <section className="planting-care-container">
        <h1 className="planting-care-title">{`Planting Guide for: ${growzone}`}</h1>
        <section className="planting-details">
          <p className="sun-duration">{`Sun: ${data?.vegetableDetails?.sun}`}</p>
          <p className="weekly-water">{`Weekly Water: ${data?.vegetableDetails?.water}`}</p>
          <p className="row-spacing">{`Row Spacing: ${data?.vegetableDetails?.rowSpacing}`}</p>
          <p className="seed-spacing">{`Seed Spacing: ${data?.vegetableDetails?.seedSpacing}`}</p>
          <p className="indoor-dates">{`Indoor Seed Start Dates: ${data?.vegetableDetails.zoneDetails?.plantSeedsIndoorsStart} to ${data?.vegetableDetails.zoneDetails?.plantSeedsIndoorsEnd}`}</p>
          <p className="outdoor-seedling">
          {`Outdoor Seedling Start Dates: ${data?.vegetableDetails.zoneDetails?.plantSeedlingsStart} to ${data?.vegetableDetails.zoneDetails?.plantSeedlingsEnd}`}
          </p>
          <p className="outdoor-seed">
          {`Outdoor Seed Start Dates: ${data?.vegetableDetails.zoneDetails?.plantSeedsOutdoorsStart} to ${data?.vegetableDetails.zoneDetails?.plantSeedsOutdoorsEnd}`}
          </p>
          <p className="harvest-time">{`Harvest Time: ${data?.vegetableDetails?.growingDuration}`}</p>
        </section>
      </section>
    </main>
  );
};

export default Plant;
