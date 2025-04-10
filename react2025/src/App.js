import React, { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import CreditComp from "./components/creditComp";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent component</h1>
      <Counter count={count} setCount={setCount} />
      <CreditComp count={count} />
    </div>
  );
};

export default App;
