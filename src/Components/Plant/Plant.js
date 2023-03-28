import "./Plant.css";
import radish from "../../Assets/radish.jpg";

const Plant = () => {
  return (
    <main className="plant-details-container">
      <h1 className="plant-title">Radishes</h1>
      <section className="plant-image">
        <img className="large-plant-img" src={radish} alt="plant" />
      </section>
      <section className="plant-details-text">
        <p className="plant-description">
          Radish, Raphanus sativus, is an herbaceous annual or biennial plant in
          the family Brassicaceae, grown for its edible taproot. The radish
          plant has a short hairy stem and a rosette (ground level horizontal
          and circular leaves) of oblong shaped leaves which measure 5–30 cm
          (2–12 in) in length. The top leaves of the plant are smaller and
          lance-like. The taproot of the plant is cylindrical or tapering and
          commonly red or white in color. The radish plant produces multiple
          purple or pink flowers on racemes which produce 2–12 seeds. The
          reddish brown seeds are oval, and slightly flattened. Radish is
          generally grown as an annual plant, surviving only one growing season
          and can reach 20–100 cm (8–39 in) in height depending on the variety.
          Radish may also be referred to by the name of the cultivar and names
          may include Chinese radish, Japanese radish or oriental radish. The
          origin of the radish plant has not been determined but they are found
          growing native from the Mediterranean to the Caspian Sea.
        </p>
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
