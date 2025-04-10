import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Counter from "./components/counter";

const App = () => {
  const [data, setData] = useState("Initial data");
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => 0;

  return (
    <div>
      <h1>Hey! React app here</h1>
      <div>Count: {count} </div>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
    </div>
  );
};

export default App;
