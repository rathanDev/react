import React, { useContext } from "react";
import { DashboardContext } from "../context/userContext";

const Sidebar = () => {
  const user = useContext(DashboardContext);

  return (
    <div>
      <h1>Sidebar</h1>
      <div>User: {user?.name}</div>
      <div>Subscribed: {user?.isSubscribed}</div>
    </div>
  );
};

export default Sidebar;
