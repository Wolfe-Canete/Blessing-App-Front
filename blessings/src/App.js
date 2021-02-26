import './App.css';
import Navigation from './Components/Navigation';
import BlessingList from './Components/BlessingList';
import BlessingForm from './Components/BlessingForm'


function App() {
  return (
    <div className="App">
      <h1>The Bite-Sized Book Of Itty Bitty Blessings</h1>
      <Navigation/>
      <BlessingForm/>
      <BlessingList/>
    </div>
  );
}

export default App;
