import React from "react";
import Profile from "./profile";
import Sidebar from "./sidebar";
import { User } from "../App";

interface DashboardProps {
  user: User;
}

const Dashboard = ({ user }: DashboardProps) => {
  return (
    <div>
      <Profile user={user} />
      <Sidebar user={user} />
    </div>
  );
};

export default Dashboard;
