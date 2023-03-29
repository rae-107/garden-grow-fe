
import './App.css';
import Home from '../Home/Home'
import Plants from '../Plants/Plants';
import { Switch, Route } from 'react-router-dom';
import { ApolloClient, inMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client"
import { onError } from "@apollo/client/link/error"

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

