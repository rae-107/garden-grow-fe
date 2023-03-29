
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
// const link = from([
//   // errorLink,
//   new HttpLink({ uri: "https://garden-grow-be.herokuapp.com/api/v1/graphql"})
// ])

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link
// })

function App() {
  const { error, loading, data } = useQuery(LOAD_PLANTS)
  const [plants, setPlants] = useState([])

  useEffect (() => {
    if(data) {
      setPlants(data.vegetablesByZipcode)
      console.log("here is raes zipcode", data.vegetablesByZipcode)
    }
  }, [plants, data])

  return (
 
      <div className='app-container'>
        <Switch>
          <Route
          exact path="/"
          render={() => (
            <Home setPlants={setPlants}/>
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

