import "./App.css";
import Home from "../Home/Home";
import Plants from "../Plants/Plants";
import Plant from "../Plant/Plant";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [plants, setPlants] = useState([]);
  const [growzone, setGrowzone] = useState("");
  const [zipcode, setZipcode] = useState("");
  
  console.log(growzone); // using growzone variable to make linter happy
  console.log('plants', plants)
  console.log(zipcode)
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
            />
          )}
        ></Route>
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
            console.log('route', match.params)
          return (
            <Plant id={match.params.vegetableId} growzone={match.params.growzone}/>
          )
        }}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
