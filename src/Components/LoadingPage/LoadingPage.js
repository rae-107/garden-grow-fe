import "./LoadingPage.css";
import LoadingCard from "../LoadingCard/LoadingCard";
import plant from "../../Images/plantGrow2.gif";

const LoadingPage = () => {
  return (
    <section className="loading-page">
      <img className="sunflower-gif" src={plant} alt="sunflowers" />
      <h1 className="loading-text">Loading ...</h1>
      <section className="loading-cards-grid">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </section>
    </section>
  );
};

export default LoadingPage;
