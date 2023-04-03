import "./App.css";
import Home from "../Home/Home";
import Plants from "../Plants/Plants";
import Plant from "../Plant/Plant";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOAD_PLANTS } from "../../Graphql/Queries";
import { useQuery} from '@apollo/client'

const App =() => {
  const [plants, setPlants] = useState([]);
  const [growzone, setGrowzone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const { data } = useQuery(LOAD_PLANTS)
  const [savePlant, setSavePlant] = useState([])

  useEffect (() => {
    if(data) {
      setPlants([...data.vegetablesByZipcode.vegetables]);
      setGrowzone(data.vegetablesByZipcode.growZone);
    }
  }, [data, setPlants, setGrowzone])

  const addToGarden = (id) => {
    if(!savePlant.includes(id)) {
      const savedList = plants.filter(savedPlant => savedPlant.id === id)
      return setSavePlant(previousList => [...previousList, savedList[0]])
    }
  }

  //below for testing while working only can be deleted at end
  useEffect(() => {
    console.log("hey this is growzone", growzone)
}, [growzone])

  useEffect (() => {
    console.log("hey this is plants", plants)
  }, [plants])

  useEffect (() => {
    console.log("hey this is zipcode", zipcode)
  }, [zipcode])

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
        />
        <Route
          exact
          path="/:zipcode"
          render={() => (
            <Plants
              plants={plants}
              heading={`Your ${zipcode} Fruits and Vegetables`}
              addToGarden={addToGarden}
            />
          )}
          />
        <Route exact path="/:veggie" render={() => <Plant />}></Route>
        <Route 
          exact path="/MyGarden" 
          render={() => (
            <Plants 
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
