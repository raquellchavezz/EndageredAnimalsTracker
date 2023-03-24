import "./App.css";
import AddSpecies from "./components/AddSpecies";
import Header from "./components/Header";
import AddSighting from "./components/AddSightings";
import AllSightings from "./components/AllSightings";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AddSpecies />
      <AddSighting /> */}
      <AllSightings />
    </div>
  );
}

export default App;
