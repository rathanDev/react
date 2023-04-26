import "./App.css";
import react, { useState, useEffect } from "react";
import { ethers } from "ethers";
import NftAbi from "./NftAbi.json";

const App = () => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [balance, setBalance] = useState(-1);
  const [block, setBlock] = useState("");
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const decimals = 18;

  useEffect(() => {
    connectToMetamask();
  }, []);

  const connectToMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("provider", provider);
    const accounts = await provider.send("eth_requestAccounts", []);
    console.log("accounts", accounts);
    setSelectedAccount(accounts[0]);
    const balance = await provider.getBalance(selectedAccount);
    console.log("balance", balance);

    console.log("ethersUtils-->", ethers);
    const balanceInEther = ethers.utils.formatEther(balance);
    console.log("balanceInEther", balanceInEther);
    setBalance(balance);

    const block = await provider.getBlockNumber();
    provider.on("block", (block) => {
      setBlock(block);
    });
    const contract = new ethers.Contract(contractAddress, NftAbi, provider);
    console.log("contract", contract);
  };

  const flipMintingAllowed = async () => {
    console.log("At transfer-->", ethers);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, NftAbi, provider);

    const contractWithSigner = contract.connect(signer);

    const flipped = await contractWithSigner.flipMintingAllowed();
    console.log("flipped?", flipped, new Date());
  };

  return (
    <div className="container">
      <h2>NFT Minting</h2>
      <label for="input1">
        <b>Input1</b>
      </label>
      <input type="text" name="input1" />
      <label for="input2">
        <b>Input2</b>
      </label>
      <input type="text" name="input2" />
      Balance: {ethers.utils.formatEther(balance)}
      <button onClick={connectToMetamask}>Connect to Metamask</button> <br />
      <button onClick={flipMintingAllowed}>Flip Minting Allowed</button> <br />
    </div>
  );
};

export default App;
