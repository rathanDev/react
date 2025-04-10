import React from "react";
import "./App.css";
import Counter from "./components/counter";

const App = () => {
  return (
    <div>
      <h1>Parent component</h1>
      <Counter />
    </div>
  );
};

export default App;
