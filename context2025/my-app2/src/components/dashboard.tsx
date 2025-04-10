import React, { useContext } from "react";
import Sidebar from "./sidebar";
import Profile from "./profile";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar />
      <Profile />
    </div>
  );
};

export default Dashboard;
