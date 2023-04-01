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
      <h1 className="plant-title">Radishes</h1>
      <section className="plant-image">
        <img className="large-plant-img" src={'../Assets/radish.jpg'} alt="plant" />
      </section>
      <section className="plant-details-text">
        <p className="plant-description">
          {data?.vegetableDetails?.description} </p>
      </section>
      <section className="planting-care-container">
        <h1 className="planting-care-title">Planting Guide for: 5b</h1>
        <section className="planting-details">
          <p className="sun-duration">Sun: Full Sun</p>
          <p className="weekly-water">Weekly Water: 1 Inch</p>
          <p className="row-spacing">Row Spacing: 2 Inches</p>
          <p className="seed-spacing">Seed Spacing: 2 Inches</p>
          <p className="indoor-dates">Indoor Seed Start Dates: N/A</p>
          <p className="outdoor-seedling">
            Outdoor Seedling Planting Dates: N/A
          </p>
          <p className="outdoor-seed">
            Outdoor Seed Start Dates: May 29 - June 12
          </p>
          <p className="harvest-time">Harvest Time: 21-35 Days</p>
        </section>
      </section>
    </main>
  );
};

export default Plant;
