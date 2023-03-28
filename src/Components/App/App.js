
import './App.css';
import Home from '../Home/Home'
import Plants from '../Plants/Plants';
import Plant from '../Plant/Plant';
import { Switch, Route } from 'react-router-dom';

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
        <Route
          exact path="/:veggie"
          render={() => (
            <Plant />
          )}
          >
        </Route>
      </Switch>
    </div>
  );
}


export default App;

