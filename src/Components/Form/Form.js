import "./Form.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Form = ({ setZipcode, zipcode, loadPlants }) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <div className="input-and-button">
        <label className="label" htmlFor='zipcode-input'>Zipcode</label>
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
          to={`/results/${zipcode}`}
          className="plants-link"
          onClick={() => {
            setZipcode(document.getElementById("zipcode-input").value)
            loadPlants({ variables: { zipcode: zipcode } })
          }}
        >
          <span role="img" aria-label="plant emoji">
          Let's Grow
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

Form.propTypes = {
  setZipcode: PropTypes.func.isRequired,
  zipcode: PropTypes.string.isRequired,
  loadPlants: PropTypes.func.isRequired,
};