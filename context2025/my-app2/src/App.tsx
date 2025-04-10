import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";
import { DashboardContext } from "./context/userContext";

export interface User {
  isSubscribed: boolean;
  name: string;
}

const App = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "YOU",
  });

  return (
    <div>
      <h1>App2 - With Context API</h1>

      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};

export default App;
