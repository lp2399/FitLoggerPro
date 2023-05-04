import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CalorieTracker from "./Components/CalorieTracker";
import WorkoutLogger from "./Components/WorkoutLogger";
import WeightInput from "./Components/WeightInput";
import Progress from "./Components/Progress";
import ProfileNavbar from "./Components/ProfileNavbar";
import { auth } from "../firebase";

const ProfilePage = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile container">
      <h1 className="my-4">User Profile</h1>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <strong>Name:</strong> {user.displayName}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
      <ProfileNavbar>
        <WorkoutLogger />
        <CalorieTracker />
        <WeightInput />
        <Progress />
      </ProfileNavbar>
    </div>
  );
};

export default ProfilePage;
