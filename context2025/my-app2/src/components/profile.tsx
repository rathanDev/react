import { useContext } from "react";
import { DashboardContext } from "../context/userContext";

const Profile = () => {
  const user = useContext(DashboardContext);
  return (
    <div>
      <h1>Profile</h1>
      <div>user: {user?.name}</div>
      <div>isSubscribed?: {user?.isSubscribed}</div>
    </div>
  );
};

export default Profile;
