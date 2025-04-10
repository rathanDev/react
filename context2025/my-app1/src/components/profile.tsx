import React from "react";
import { User } from "../App";

interface ProfileProps {
  user: User;
}

const Profile = ({ user }: ProfileProps) => {
  return (
    <div>
      <h1>Profile</h1>
      <div>{user.name}</div>
      <div>Subscribed?{user.isSubscribed ? "Yes" : "No"}</div>
    </div>
  );
};

export default Profile;
