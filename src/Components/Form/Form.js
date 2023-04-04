import "./Form.css";
import { Link } from "react-router-dom";

const Form = ({ setZipcode, zipcode, loadPlants }) => {
  return (
    <form className="form-container">
      <div className="input-and-button">
        <input
          className="input"
          type="number"
          min="10000"
          max="99999"
          placeholder="zip code"
          name="zipcode"
          //needed id for onclick function in link
          id="zipcode-input"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />
        <Link
          to={`/${zipcode}`}
          className="plants-link"
          onClick={() => {
            setZipcode(document.getElementById("zipcode-input").value)
            loadPlants({ variables: { zipcode: zipcode } })
          }}
        >
          <span role="img" aria-label="plant emoji">
            &#x1F331;{" "}
          </span>
        </Link>
      </div>
      <div className="error-container">
        {/* {error && (
          <div className="error-message">please enter a valid zipcode</div>
        )} */}
      </div>
    </form>
  );
};

export default Form;
