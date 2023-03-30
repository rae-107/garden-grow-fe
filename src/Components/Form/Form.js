import "./Form.css";
import { useLazyQuery } from "@apollo/client";
import { LOAD_PLANTS } from "../../Graphql/Queries";

const Form = ({ setPlants, setGrowzone, setZipcode, zipcode }) => {
  const [loadPlants, { loading, error, data }] = useLazyQuery(LOAD_PLANTS);

  const submitZip = (event) => {
    event.preventDefault();
    loadPlants({
      variables: {
        zipcode,
      },
    });
    if (data) {
      setPlants([...data.vegetablesByZipcode.vegetables]);
      setGrowzone(data.vegetablesByZipcode.growZone);
    }
  };

  const clearInputs = () => {
    setZipcode("");
  };

  return (
    <form className="form-container">
      <div className="input-and-button">
        <input
          className="input"
          type="number"
          min="10000"
          max="99999"
          placeholder="zip code"
          name="zipCode"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />
        <button className="form-button" onClick={(event) => submitZip(event)}>
          GO
        </button>
      </div>
      <div className="error-container">
        {error && (
          <div className="error-message">please enter a valid zipcode</div>
        )}
      </div>
    </form>
  );
};

export default Form;
