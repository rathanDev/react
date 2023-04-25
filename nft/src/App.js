import "./App.css";
import { ethers } from "ethers";
import react, { useState, useEffect } from "react";
// require("ethers")

const App = () => {
  useEffect(() => {
    connectToMetamask();
  }, []);

  const connectToMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("provider", provider);
  };

  return (
    <div>
      Learning EtherJs
      <button onClick={connectToMetamask}>
        Connect to Metamask
      </button>
    </div>
  );
};

export default App;
