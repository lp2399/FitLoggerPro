import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore } from "../../firebase";
import { auth } from "../../firebase";

const WeightInput = () => {
  const [user] = useAuthState(auth);
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      window.confirm("Are you sure you want to submit your weight measurement?")
    ) {
      if (user) {
        const weightData = {
          weight: parseFloat(weight),
          unit,
          userId: user.uid,
          timestamp: new Date().toISOString(),
        };

        try {
          await firestore.collection("weights").add(weightData);
          console.log("Weight data saved:", weightData);
          setWeight("");
        } catch (error) {
          console.error("Error saving weight data:", error);
          setErrorMessage("Error saving weight data. Please try again.");
        }
      } else {
        console.error("User not logged in");
        setErrorMessage("Please log in to save your weight data.");
      }
    }
  };
  return (
    <div className="weight-input my-4">
      <h2>Enter Weight</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your weight"
            value={weight}
            onChange={handleWeightChange}
          />
          <div className="input-group-append">
            <select
              className="custom-select"
              value={unit}
              onChange={handleUnitChange}
            >
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit Weight
        </button>
      </form>
      <p className="mt-3">
        Your weight is {weight} {unit}.
      </p>
      <div>{errorMessage && <div className="error">{errorMessage}</div>} </div>
    </div>
  );
};

export default WeightInput;
