import React, { useState } from "react";

const ProfileNavbar = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(0);

  return (
    <div>
      <div className="navbar d-flex flex-column align-items-start">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center mb-3">
            <button
              className="btn btn-primary m-2"
              onClick={() => setSelectedComponent(0)}
            >
              Workout Logger
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => setSelectedComponent(1)}
            >
              Calorie Tracker
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => setSelectedComponent(2)}
            >
              Weight Input
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => setSelectedComponent(3)}
            >
              Progress
            </button>
          </div>
        </div>
        <div>{children[selectedComponent]}</div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
