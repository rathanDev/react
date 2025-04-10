import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps {}

const App = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "YOU",
  });
  return (
    <div>
      <Dashboard user={user} />
    </div>
  );
};

export default App;
