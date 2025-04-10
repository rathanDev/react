import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import CreditComp from "./components/creditComp";
import callApi from "./utils/apiCaller";

const App = () => {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await callApi();
      setApiData(data[1]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Parent component</h1>
      <Counter count={count} setCount={setCount} />
      <CreditComp count={count} />
      <br />
      {apiData ? JSON.stringify(apiData) : <span>Loading...</span>}
    </div>
  );
};

export default App;
