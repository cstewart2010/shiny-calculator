import { useState } from "react";
import GenPicker from "./components/GenPicker";
import { getGenerationLocal, removeGenerationLocal, setGenerationLocal } from "./helper/localStorage";
import Counter from "./components/Counter";

function App() {
  const [generation, setGeneration] = useState(getGenerationLocal());
  const update = (value: string) => {
      if (!value || value === ''){
          setGeneration(null);
          removeGenerationLocal();
          return;
      }
  
      const parsedValue = JSON.parse(value);
      if (typeof parsedValue === 'number'){
        setGenerationLocal(parsedValue);
        setGeneration(parsedValue);
      }
  }
  return (
    <div className="container">
      <h2>Pokemon Shiny Calculator</h2>
      <GenPicker generation={generation} onChange={e => update(e.target.value)} />
      <Counter generation={generation} />
    </div>
  );
}

export default App;
