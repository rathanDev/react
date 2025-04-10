import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";

export interface User {
  isSubscribed: boolean;
  name: string;
}

function App() {
  return (
    <div>
      <h1>App2 - With Context API</h1>
      <Dashboard />
    </div>
  );
}

export default App;
