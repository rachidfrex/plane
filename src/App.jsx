import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Card from "./components/card";
import Support from "./components/support";
import Travelben from "./components/travelben";
function App() {
  return (
    <div className="relative w-full flex-col justify-center items-center">
      <Nav />
      <Hero />
      <Card />
      <Support />
      <Travelben />
    </div>
  );
}

export default App;
