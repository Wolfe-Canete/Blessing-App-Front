import './App.css';
import Navigation from './Components/Navigation';
import BlessingList from './Components/BlessingList';
import BlessingForm from './Components/BlessingForm'
import BlessingUpdate from './Components/BlessingUpdate';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <BlessingUpdate/>
      <BlessingForm/>
      <BlessingList/>
    </div>
  );
}

export default App;
