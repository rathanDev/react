import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Sidebar = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Sidebar</h1>
      <div>User: {user?.name}</div>
      <div>Subscribed: {user?.isSubscribed}</div>
    </div>
  );
};

export default Sidebar;
