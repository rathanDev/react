import React from "react";
import { User } from "../App";

interface SidebarProps {
  user: User;
}

const Sidebar = ({ user }: SidebarProps) => {
  return (
    <div>
      <h1>Sidebar</h1>
      <div>{user.name}</div>
      <div>Subscribed?{user.isSubscribed}</div>
    </div>
  );
};

export default Sidebar;
