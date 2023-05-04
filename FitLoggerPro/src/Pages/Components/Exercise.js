import React, { useState } from "react";

const Exercise = ({ exercise }) => {
  const [sets, setSets] = useState(exercise.sets);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);

  const handleSetsChange = (e) => {
    setSets(e.target.value);
  };

  const handleRepsChange = (e) => {
    setReps(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div>
      <h3>{exercise.name}</h3>
      <label htmlFor="sets">Sets:</label>
      <input
        type="number"
        id="sets"
        name="sets"
        value={sets}
        onChange={handleSetsChange}
      />
      <label htmlFor="reps">Reps:</label>
      <input
        type="number"
        id="reps"
        name="reps"
        value={reps}
        onChange={handleRepsChange}
      />
      <label htmlFor="weight">Weight:</label>
      <input
        type="number"
        id="weight"
        name="weight"
        value={weight}
        onChange={handleWeightChange}
      />
    </div>
  );
};

export default Exercise;
