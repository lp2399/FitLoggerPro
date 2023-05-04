import React, { useState } from "react";
import Exercise from "./Exercise";
import "../../Styles/workoutlogger.css";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
const commonExercises = [
  "Deadlift",
  "Bench Press",
  "Incline Bench Press",
  "Decline Bench Press",
  "Squat",
  "Leg Press",
  "Pull Up",
  "Chin Up",
  "Barbell Row",
  "Dumbbell Row",
  "Seated Cable Row",
  "Lat Pulldown",
  "Push Up",
  "Dips",
  "Overhead Press",
  "Lateral Raise",
  "Front Raise",
  "Bent Over Reverse Fly",
  "Bicep Curl",
  "Hammer Curl",
  "Concentration Curl",
  "Tricep Extension",
  "Skull Crusher",
  "Tricep Pushdown",
  "Leg Extension",
  "Leg Curl",
  "Calf Raise",
];

const WorkoutLogger = () => {
  const { currentUser } = useAuth();
  const [exercise, setExercise] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [duration, setDuration] = useState("");

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
    setFilteredExercises(
      commonExercises.filter((ex) =>
        ex.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    const newExercise = {
      name: exercise,
      sets: 0,
      reps: 0,
      weight: 0,
    };
    setWorkouts([...workouts, newExercise]);
    setExercise("");
    setFilteredExercises([]);
  };

  const handleRemoveExercise = (index, e) => {
    e.preventDefault();
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
  };

  const saveWorkoutDataToFirestore = async (workoutData) => {
    try {
      const workoutRef = firestore.collection("workouts").doc(); // Create a reference to a new document in the 'workouts' collection
      await workoutRef.set({
        ...workoutData,
        uid: currentUser.uid, // Store the user's ID with the workout data
      });
      console.log(
        "Workout data saved to Firestore with document ID:",
        workoutRef.id
      );
    } catch (error) {
      console.error("Error saving workout data to Firestore:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to submit the workout?")) {
      const timestamp = new Date();

      const workoutData = {
        workouts,
        duration,
        weightUnit,
        date: timestamp.toLocaleDateString(),
        time: timestamp.toLocaleTimeString(),
      };

      saveWorkoutDataToFirestore(workoutData); // Save the workout data to Firestore

      setWorkouts([]);
      setDuration("");
    }
  };

  const selectExercise = (selectedExercise) => {
    setExercise(selectedExercise);
    setFilteredExercises([]);
  };
  const [weightUnit, setWeightUnit] = useState("kg");
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Workout Logger</h2>
      <form>
        <div className="form-group pb-3">
          <label htmlFor="exercise">Exercise:</label>
          <input
            type="text"
            className="form-control"
            id="exercise"
            name="exercise"
            value={exercise}
            onChange={handleExerciseChange}
            autoComplete="off"
          />
          {filteredExercises.length > 0 && (
            <ul className="list-group">
              {filteredExercises.map((ex, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => selectExercise(ex)}
                >
                  {ex}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className="btn btn-primary mb-3 mt-3"
          onClick={(e) => handleAddExercise(e)}
        >
          Add Exercise
        </button>
        <div>
          <div className="form-group mt-3 pb-3">
            <label htmlFor="weight-unit-kg">
              <input
                type="radio"
                id="weight-unit-kg"
                name="weight-unit"
                value="kg"
                checked={weightUnit === "kg"}
                onChange={(e) => setWeightUnit(e.target.value)}
              />
              kg
            </label>
            <label htmlFor="weight-unit-lbs">
              <input
                type="radio"
                id="weight-unit-lbs"
                name="weight-unit"
                value="lbs"
                checked={weightUnit === "lbs"}
                onChange={(e) => setWeightUnit(e.target.value)}
              />
              lbs
            </label>
          </div>
          {workouts.map((workout, index) => (
            <div key={index} className="exercise-container mb-3">
              <Exercise exercise={workout} />
              <button
                className="btn btn-danger btn-sm mt-3 mt-3"
                onClick={(e) => handleRemoveExercise(index, e)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="form-group mt-3 pb-3">
          <label htmlFor="duration">Workout Duration (minutes):</label>
          <input
            type="number"
            className="form-control"
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <button className="btn btn-success mt-3" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkoutLogger;