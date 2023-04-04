import "./Plant.css";
import xLogo from "../../Images/x-vector.png";
import { LOAD_VEGETABLE } from "../../Graphql/Queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const Plant = ({ id, growzone }) => {
  const { loading, error, data } = useQuery(LOAD_VEGETABLE, {
    variables: { vegetableId: id, zone: growzone },
  });
  return (
    <main className="plant-details-container">
      <Link to="/:zipcode">
        <section className="back-logo">
          <img className="x-image-button" src={xLogo} alt="logo" />
        </section>
      </Link>
      <h1 className="plant-title">{data?.vegetableDetails?.name}</h1>
      <section className="plant-image">
        <img
          className="large-plant-img"
          src={`../Assets/${data?.vegetableDetails?.image}`}
          alt="plant"
        />
      </section>
      <section className="planting-care-container">
        <h1 className="planting-care-title">{`Planting Guide for: ${growzone}`}</h1>
        <section className="planting-details">
          <p className="sun-duration">{`Sun: ${data?.vegetableDetails?.sun}`}</p>
          <p className="weekly-water">{`Weekly Water: ${data?.vegetableDetails?.water}`}</p>
          <p className="row-spacing">{`Row Spacing: ${data?.vegetableDetails?.rowSpacing}`}</p>
          <p className="seed-spacing">{`Seed Spacing: ${data?.vegetableDetails?.seedSpacing}`}</p>
          <p className="indoor-dates">
            {data?.vegetableDetails.zoneDetails?.plantSeedsIndoorsStart &&
            data?.vegetableDetails.zoneDetails?.plantSeedsIndoorsEnd
              ? `Indoor Seed Start Dates: ${data?.vegetableDetails.zoneDetails?.plantSeedsIndoorsStart} to ${data?.vegetableDetails.zoneDetails?.plantSeedsIndoorsEnd}`
              : null}
          </p>
          <p className="outdoor-seedling">
            {data?.vegetableDetails.zoneDetails?.plantSeedlingsStart &&
            data?.vegetableDetails.zoneDetails?.plantSeedlingsEnd
              ? `Outdoor Seedling Start Dates: ${data?.vegetableDetails.zoneDetails?.plantSeedlingsStart} to ${data?.vegetableDetails.zoneDetails?.plantSeedlingsEnd}`
              : null}
          </p>
          <p className="outdoor-seed">
            {data?.vegetableDetails.zoneDetails?.plantSeedsOutdoorsStart &&
            data?.vegetableDetails.zoneDetails?.plantSeedsOutdoorsEnd
              ? `Outdoor Seed Start Dates: ${data?.vegetableDetails.zoneDetails?.plantSeedsOutdoorsStart} to ${data?.vegetableDetails.zoneDetails?.plantSeedsOutdoorsEnd}`
              : null}
          </p>
          <p className="harvest-time">{`Harvest Time: ${data?.vegetableDetails?.growingDuration}`}</p>
        </section>
      </section>
      <section className="plant-details-text">
        <section className="plant-text">
          <p className="plant-description">
            {data?.vegetableDetails?.description}{" "}
          </p>
        </section>
      </section>
    </main>
  );
};

export default Plant;
