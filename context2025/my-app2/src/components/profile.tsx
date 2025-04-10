import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Profile</h1>
      <div>user: {user?.name}</div>
      <div>isSubscribed?: {user?.isSubscribed}</div>
    </div>
  );
};

export default Profile;
