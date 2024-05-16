import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Card from "./components/card";
import Support from "./components/support";
import Travelben from "./components/travelben";
import Exp from "./components/exp";
function App() {
  return (
    <div className="relative w-full flex-col justify-center items-center">
      <Nav />
      <Hero />
      <Card />
      <Support />
      <Travelben />
      <Exp />
    </div>
  );
}

export default App;
