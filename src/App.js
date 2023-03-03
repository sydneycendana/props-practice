import Showcase from "./Showcase";
import BaseStats from "./BaseStats";
import "./App.css";

function App() {
  const baseStats = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45
  };

  const handleClick = () => {
    console.log("it worked");
  };
  return (
    <div className="main-wrapper background">
      <Showcase />
      <BaseStats stats={baseStats} handleClick={handleClick} />
    </div>
  );
}

export default App;
