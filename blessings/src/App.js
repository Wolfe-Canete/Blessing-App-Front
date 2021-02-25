import './App.css';
import Navigation from './Components/Navigation'
import BlessingList from './Components/BlessingList';
// import BlessingDetail from './Components/BlessingDetail'

function App() {
  return (
    <div className="App">
      <h1>The Bite-Sized Book Of Itty Bitty Blessings</h1>
      <Navigation/>
      <BlessingList/>
      {/* <BlessingDetail/> */}
    </div>
  );
}

export default App;
