import React, { useState } from "react";
import "./App.css";
import Cat from "./components/Cat";
import { memo } from "react";
import { useCallback } from "react";

const PureCat = memo(Cat);

const App = () => {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  const meow = useCallback((name) => console.log(`${name} has meowed`), []);
  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={meow}/>
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
};

export default App;
