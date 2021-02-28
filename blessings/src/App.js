import './App.css';
import Navigation from './Components/Navigation';
import BlessingList from './Components/BlessingList';
import BlessingForm from './Components/BlessingForm'
import BlessingUpdate from './Components/BlessingUpdate';
import BlessingDetail from './Components/BlessingDetail'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BlessingList/>
      <BlessingUpdate/>
      <BlessingForm/>

    <Switch>
      {/* <Route exact path='/' render={() => <Home/>}/> */}
      <Route exact path='/blessings/:id' render={(routerProps) => <BlessingDetail match={routerProps.match}/>}/>
    </Switch>
    </div>
  );
}

export default App;
