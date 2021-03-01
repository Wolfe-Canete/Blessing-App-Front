import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import BlessingDetail from './Components/BlessingDetail'
import BlessingList from './Components/BlessingList';

function App() {
  return (
    <div className="App">
      <Navigation/>

      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/blessings' render={() => <BlessingList/>}/>
        <Route exact path='/blessings/:id' render={(routerProps) => <BlessingDetail match={routerProps.match}/>}/>
      </Switch>
    </div>
  );
}

export default App;
