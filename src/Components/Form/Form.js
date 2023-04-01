import "./Form.css";
import { useQuery } from "@apollo/client";
import { LOAD_PLANTS } from "../../Graphql/Queries";
import {  useEffect } from "react";
import { Link } from "react-router-dom";

  const Form = ({ setPlants, setGrowzone, setZipcode, zipcode }) => {
    //if you have a useQuery in form must be same function in app had to change lazyQuery
    const { loading, error, data } = useQuery(LOAD_PLANTS, {
      //below it is saying to only run the query if there is a zipcode rather than lazyQuery
      skip: !zipcode,
      variables: {
        zipcode: zipcode
      }
    });

  useEffect(() => {
    if (data) {
      setPlants([...data.vegetablesByZipcode.vegetables]);
      setGrowzone(data.vegetablesByZipcode.growZone);
      }
  }, [data, setGrowzone, setPlants]);

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
          //needed id for onclick function in link
          id="zipcode-input"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />
          <Link 
            to={`/${zipcode}`}
            className="plants-link"
            //no zip in data so pulling zipcode into state from input on click
            onClick={() => setZipcode(document.getElementById("zipcode-input").value)}
        >
            <span role="img" aria-label="plant emoji">&#x1F331; </span>
          </Link>
      </div>
      <div className="error-container">
        {error && (
          <div className="error-message">please enter a valid zipcode</div>
        )}
      </div>
    </form>
  );
};

export default Form
