import "./App.css";
import AddSpecies from "./components/AddSpecies";
import Header from "./components/Header";
import AddSighting from "./components/AddSightings";

function App() {
  return (
    <div className="App">
      <Header />
      <AddSpecies />
      <AddSighting />
    </div>
  );
}

export default App;
