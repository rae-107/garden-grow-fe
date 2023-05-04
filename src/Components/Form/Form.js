import "./Form.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Form = ({ setZipcode, zipcode, loadPlants }) => {
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }} className="form-container">
      <div className="input-and-button">
        <label className="label" htmlFor="zipcode-input">
          Zipcode
        </label>
        <input
          className="input"
          type="number"
          min="10000"
          max="99999"
          placeholder="zip code"
          name="zipcode"
          id="zipcode-input"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />
        {zipcode.length === 5 ? (
          <Link
            to={`/results/${zipcode}`}
            className="plants-link"
            onClick={() => {
              setZipcode(document.getElementById("zipcode-input").value);
              loadPlants({ variables: { zipcode: zipcode } });
            }}
          >
            <span role="img" aria-label="plant emoji">
              Let's Grow!
            </span>
          </Link>
        ) : <button className="plants-link">Let's Grow!</button>}
      </div>
    </form>
  );
};

export default Form;

Form.propTypes = {
  setZipcode: PropTypes.func.isRequired,
  zipcode: PropTypes.string.isRequired,
  loadPlants: PropTypes.func.isRequired,
};
