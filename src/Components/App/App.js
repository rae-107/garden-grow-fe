import "./App.css";
import Home from "../Home/Home";
import Plants from "../Plants/Plants";
import Plant from "../Plant/Plant";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOAD_PLANTS } from "../../Graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const App = () => {
  const [plants, setPlants] = useState([]);
  const [growzone, setGrowzone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [loadPlants, { loading, error, data }] = useLazyQuery(LOAD_PLANTS);

  useEffect(() => {
    if (data) {
      setPlants([...data.vegetablesByZipcode.vegetables]);
      setGrowzone(data.vegetablesByZipcode.growZone);
    }
  }, [loading, error, data]);
  console.log(error)

  //below for testing while working only can be deleted at end
  useEffect(() => {
    console.log("hey this is growzone", growzone);
  }, [growzone]);

  useEffect(() => {
    console.log("hey this is plants", plants);
  }, [plants]);

  useEffect(() => {
    console.log("hey this is zipcode", zipcode);
  }, [zipcode]);

  return (
    <div className="app-container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              zipcode={zipcode}
              setZipcode={setZipcode}
              setPlants={setPlants}
              setGrowzone={setGrowzone}
              loadPlants={loadPlants}
            />
          )}
        />
        {loading && (
          <Route exact path="/" render={() => <LoadingPage />}></Route>
        )}
        <Route
          exact
          path="/:zipcode"
          render={() => (
            <Plants
              plants={plants}
              growzone={growzone}
              heading={`Your ${zipcode} Fruits and Vegetables`}
            />
          )}
        ></Route>
        <Route
          exact
          path="/:growzone/:vegetableId"
          render={({ match }) => {
            console.log("route", match.params);
            return (
              <Plant
                id={match.params.vegetableId}
                growzone={match.params.growzone}
              />
            );
          }}
        ></Route>
        <Route
          exact
          path="*"
          render={() => (
            <ErrorPage/>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
