import "./App.css";
import { ethers } from "ethers";
import react, { useState, useEffect } from "react";
// require("ethers")

const App = () => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [balance, setBalance] = useState(-1);

  useEffect(() => {
    console.log("ethers-->", ethers);
    // connectToMetamask();
  }, []);

  const connectToMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("provider", provider);
    const accounts = await provider.send("eth_requestAccounts", []);
    console.log("accounts", accounts);
    setSelectedAddress(accounts[0]);
    const balance = await provider.getBalance(selectedAddress);
    console.log("balance", balance);
    // const balanceInEther = ethers.utils.formatEther(balance);
    setBalance(balance);
  };

  return (
    <div>
      Learning EtherJs
      <button onClick={connectToMetamask}>Connect to Metamask</button>
      Balance: {ethers.utils.formatEther(balance)}
    </div>
  );
};

export default App;
