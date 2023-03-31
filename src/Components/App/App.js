import "./App.css";
import Home from "../Home/Home";
import Plants from "../Plants/Plants";
import Plant from "../Plant/Plant";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOAD_PLANTS } from "../../Graphql/Queries";
import { useQuery} from '@apollo/client'

function App() {
  const [plants, setPlants] = useState([]);
  const [growzone, setGrowzone] = useState("");
  const [zipcode, setZipcode] = useState("");
  console.log(growzone); // using growzone variable to make linter happy
  const { data } = useQuery(LOAD_PLANTS)

  // useEffect (() => {
  //   if(data) {
  //     setPlants(data.vegetablesByZipcode)
  //     console.log("here is raes zipcode", data.vegetablesByZipcode)
  //   }
  // }, [plants, data])

  useEffect(() => {
    console.log("hey this is growzone", growzone)
}, [growzone])

  useEffect (() => {
    console.log("hey this is plants", plants)
  }, [plants])

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
              heading={`Your ${zipcode} Fruits and Vegetables`}
            />
          )}
        ></Route>
        <Route exact path="/:veggie" render={() => <Plant />}></Route>
      </Switch>
    </div>
  );
}

export default App;
