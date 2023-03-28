import './App.css';
import Home from '../Home/Home'
import Plants from '../Plants/Plants';
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
          <Home />
        )}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
