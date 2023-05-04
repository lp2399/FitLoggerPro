import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore } from "../../firebase";
import { auth } from "../../firebase";

const TrackCalories = () => {
  const [user] = useAuthState(auth);
  const [calories, setCalories] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);
  const [proteins, setProteins] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "calories":
        setCalories(value);
        break;
      case "carbs":
        setCarbs(value);
        break;
      case "fats":
        setFats(value);
        break;
      case "proteins":
        setProteins(value);
        break;
      default:
        break;
    }
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      window.confirm("Are you sure you want track calories and macronutrients?")
    ) {
      if (user) {
        const entryData = {
          calories: parseFloat(calories),
          carbs: parseFloat(carbs),
          fats: parseFloat(fats),
          proteins: parseFloat(proteins),
          userId: user.uid,
          timestamp: new Date().toISOString(),
        };

        try {
          await firestore.collection("calories").add(entryData);
          console.log("Calorie data saved:", entryData);
          setCalories(0);
          setCarbs(0);
          setFats(0);
          setProteins(0);
        } catch (error) {
          console.error("Error saving calorie data:", error);
          setErrorMessage("Error saving calorie data. Please try again.");
        }
      } else {
        console.error("User not logged in");
        setErrorMessage("Please log in to save your calorie data.");
      }
    }
  };

  return (
    <div className="track-calories container">
      <h2 className="my-4">Track Your Calories</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={calories}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="carbs">Carbs:</label>
          <input
            type="number"
            id="carbs"
            name="carbs"
            value={carbs}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fats">Fats:</label>
          <input
            type="number"
            id="fats"
            name="fats"
            value={fats}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="proteins">Proteins:</label>
          <input
            type="number"
            id="proteins"
            name="proteins"
            value={proteins}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit Entry
        </button>
      </form>
      <div>{errorMessage && <div className="error">{errorMessage}</div>}</div>
    </div>
  );
};

export default TrackCalories;