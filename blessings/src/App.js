import './App.css';
import Navigation from './Components/Navigation';
import BlessingList from './Components/BlessingList';
import BlessingForm from './Components/BlessingForm'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <BlessingForm/>
      <BlessingList/>
    </div>
  );
}

export default App;
