import './App.css';
import Navigation from './Components/Navigation'
import PostCard from './Components/PostCard'
import BlessingList from './Components/BlessingList';
// import BlessingDetail from './Components/BlessingDetail'


function App() {
  return (
    <div className="App">
      <h1>The Bite-Sized Book Of Itty Bitty Blessings</h1>
      <Navigation/>
      <BlessingList/>
      <PostCard/>
      {/* <BlessingDetail/> */}
    </div>
  );
}

export default App;
