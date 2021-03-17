import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Navigation';
import BlessingDetail from './Components/BlessingDetail'
import BlessingList from './Components/BlessingList';
import BlessingForm from './Components/BlessingForm';
import BlessingUpdate from './Components/BlessingUpdate';

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <BlessingSearch/> */}
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/about' render={() => <About/>}/>
        <Route exact path='/blessings' render={() => <BlessingList/>}/>
        <Route exact path='/blessings/new' render={() => <BlessingForm/>}/>
        <Route exact path='/blessings/:id' render={(routerProps) => <BlessingDetail match={routerProps.match}/>}/>
        <Route exact path='/blessings/edit/:id' render={(routerProps) => <BlessingUpdate match={routerProps.match}/>}/>
      </Switch>
    </div>
  );
}

export default App;
