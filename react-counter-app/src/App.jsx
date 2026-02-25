import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [Count, setCount] = useState(0);

  // increment function 
  function increment(){
    setCount(Count + 1)
  }
  // decrement function
  function decrement(){
    setCount(Count - 1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current Count: {Count}</p>
      <div className="btns">
        <button onClick={increment}>➕ Increment</button>
        <button onClick={decrement}>➖ Decrement</button>
        <button onClick={reset}>💱 Reset</button>
      </div>
    </div>
  );
};

export default App;
