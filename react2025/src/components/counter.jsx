import React from "react";

const Counter = ({ count, setCount }) => {
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter</h1>
      <div>Count:{count}</div>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>- Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
