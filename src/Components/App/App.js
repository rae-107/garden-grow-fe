
import './App.css';
import Home from '../Home/Home'
import Plants from '../Plants/Plants';
import { Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, useQuery, gql } from "@apollo/client"
// import { errorLink, onError } from "@apollo/client/link/error"
import { LOAD_PLANTS } from "../../Graphql/Queries"
import { useState, useEffect } from 'react';

// errorLink = onError(({graphqlErrors}) => {
//   if(graphqlErrors) {
//     graphqlErrors.map(({message, location, path}) => {
//       alert(`Graphql error: ${message}`)
//     })
//   }
// })


// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link
// })

function App() {
  const { error, loading, data } = useQuery(LOAD_PLANTS)
  const [plants, setPlants] = useState([])
  const [growzone, setGrowzone] = useState("")

  useEffect (() => {
    if(data) {
      setPlants(data.vegetablesByZipcode)
      console.log("here is raes zipcode", data.vegetablesByZipcode)
    }
  }, [plants, data])

  useEffect(() => {
    console.log("hey this is growzone", growzone)
}, [growzone])

  useEffect (() => {
    console.log("hey this is plants", plants)
  }, [plants])

  return (
 
      <div className='app-container'>
        <Switch>
          <Route
          exact path="/"
          render={() => (
            <Home setPlants={setPlants} setGrowzone={setGrowzone}/>
          )}>
          </Route>
          <Route
          exact path="/:zipcode"
          render={() => (
            <Plants />
          )}>
          </Route>
        </Switch>
      </div>
  );
}


export default App;

