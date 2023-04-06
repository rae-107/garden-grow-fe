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
import UserProfile from "../UserProfile/UserProfile";
import PropTypes from "prop-types";

const App = () => {
  const [plants, setPlants] = useState([]);
  const [growzone, setGrowzone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [userId, setUserId] = useState("");
  const [userSaved, setUserSaved] = useState([]);
  const [loadPlants, { loading, error, data }] = useLazyQuery(LOAD_PLANTS);

  useEffect(() => {
    if (data) {
      setPlants([...data.vegetablesByZipcode.vegetables]);
      setGrowzone(data.vegetablesByZipcode.growZone);
    }
  }, [loading, error, data]);

  const updateUser = (userID) => {
    setUserId(userID);
  };

  const updateUserSaved = (savedarray) => {
    return setUserSaved(savedarray);
  };

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
        {error && <Route exact path="*" render={() => <ErrorPage />} />}
        {loading && (
          <Route
            exact
            path="/results/:zipcode"
            render={() => <LoadingPage />}
          ></Route>
        )}
        <Route
          exact
          path="/results/:zipcode"
          render={({ match }) => (
            <Plants
              userSavedList={userSaved}
              saveIcon={false}
              userId={userId}
              loadPlants={loadPlants}
              plants={plants}
              growzone={growzone}
              zipcode={match.params.zipcode}
              heading={`Your ${match.params.zipcode} Fruits and Vegetables`}
            />
          )}
        ></Route>
        <Route
          exact
          path="/vegetable/:growzone/:vegetableId"
          render={({ match }) => {
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
          path="/user/:userId"
          render={({ match }) => {
            return (
              <UserProfile
                updateUserSaved={updateUserSaved}
                saveIcon={true}
                updateUser={updateUser}
                id={match.params.userId}
              />
            );
          }}
        />
        <Route exact path="*" render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
};

export default App;

App.propTypes = {
  zipcode: PropTypes.string,
  growzone: PropTypes.string,
  plants: PropTypes.array,
};
