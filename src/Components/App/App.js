
import './App.css';
import Home from '../Home/Home'
import Plants from '../Plants/Plants';
import { Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client"
import {  errorLink, onError } from "@apollo/client/link/error"

errorLink = onError(({graphqlErrors}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error: ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3000/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <div className='app-container'>
      <Switch>
        <Route
        exact path="/"
        render={() => (
          <Home />
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

