import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import Papa from "papaparse";

const Progress = () => {
  const [liftData, setLiftData] = useState({});
  const [calorieData, setCalorieData] = useState({});
  const [weightData, setWeightData] = useState({});
  const { currentUser } = useAuth();

  const fetchProgressData = async () => {
    try {
      const exampleMonths = ["January", "February", "March"];

      const exampleLiftData = [10, 20, 30];
      setLiftData(
        createChartData(
          "Lifts",
          exampleMonths,
          exampleLiftData,
          "rgba(75, 192, 192, 1)"
        )
      );

      const exampleCalorieData = [2000, 2500, 3000];
      setCalorieData(
        createChartData(
          "Calories",
          exampleMonths,
          exampleCalorieData,
          "rgba(255, 99, 132, 1)"
        )
      );

      const exampleWeightData = [150, 155, 160];
      setWeightData(
        createChartData(
          "Weight",
          exampleMonths,
          exampleWeightData,
          "rgba(153, 102, 255, 1)"
        )
      );
    } catch (error) {
      console.error("Error fetching progress data:", error);
    }
  };

  const createChartData = (label, labels, data, borderColor) => ({
    labels,
    datasets: [
      {
        label,
        data,
        borderColor,
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  const handleDeleteAllData = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete all your data, this cannot be undone?"
      )
    ) {
      const collectionNames = ["workouts", "weights", "calories"];

      try {
        for (const collection of collectionNames) {
          const collectionRef = firestore.collection(collection);
          const querySnapshot = await collectionRef
            .where("userId", "==", currentUser.uid)
            .get();
          querySnapshot.forEach((doc) => doc.ref.delete());
        }
        console.log("All user data deleted");
        // Display a success message to the user
        window.alert(
          "User data deleted, it may take some time so see changes."
        );
        // Refresh any UI components that display the user's data
        fetchProgressData();
      } catch (error) {
        console.error("Error deleting user data:", error);
        // Display an error message to the user
        window.alert("Error deleting user data. Please try again.");
      }
    }
    fetchProgressData();
  };

  const fetchData = async () => {
    const collections = ["calories", "workouts", "weights"];
    const [workoutData, calorieData, weightData] = await Promise.all(
      collections.map((collection) => fetchCollectionData(collection))
    );

    return { workoutData, calorieData, weightData };
  };

  const fetchCollectionData = async (collection) => {
    const collectionRef = firestore.collection(collection);
    const snapshot = await collectionRef
      .where("uid", "==", currentUser.uid)
      .get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  };

  const exportDataToCSV = async () => {
    const data = await fetchData();

    exportCollectionToCSV(data.workoutData, "workouts.csv");
    exportCollectionToCSV(data.weightData, "weights.csv");
    exportCollectionToCSV(data.calorieData, "calories.csv");
  };

  const exportCollectionToCSV = (data, fileName) => {
    const formattedData = data.map((entry) => {
      const formattedEntry = { ...entry };

      if (formattedEntry.date) {
        formattedEntry.date = new Date(
          formattedEntry.date
        ).toLocaleDateString();
      }
      if (formattedEntry.timestamp) {
        formattedEntry.timestamp = new Date(
          formattedEntry.timestamp
        ).toLocaleDateString();
      }

      if (formattedEntry.workouts) {
        formattedEntry.workouts = JSON.stringify(formattedEntry.workouts);
      }

      return formattedEntry;
    });

    const csv = Papa.unparse(formattedData);
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement("a");
    link.href = csvURL;
    link.setAttribute("download", fileName);
    link.click();
  };

  return (
    <div>
      <h2>Monthly Progress</h2>

      <h3>Lifts</h3>
      {liftData.labels && liftData.labels.length > 0 && (
        <Line
          data={liftData}
          options={{
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    unit: "month",
                  },
                },
              ],
            },
          }}
        />
      )}

      <h3>Calories and Macronutrients</h3>
      {calorieData.labels && calorieData.labels.length > 0 && (
        <Line
          data={calorieData}
          options={{
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    unit: "month",
                  },
                },
              ],
            },
          }}
        />
      )}

      <h3>Weight Over Time</h3>
      {weightData.labels && weightData.labels.length > 0 && (
        <Line
          data={weightData}
          options={{
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    unit: "month",
                  },
                },
              ],
            },
          }}
        />
      )}

      <button className="btn btn-danger mt-3" onClick={handleDeleteAllData}>
        Delete All Data
      </button>
      <button className="btn btn-primary mt-3" onClick={exportDataToCSV}>
        Export Data to CSV
      </button>
    </div>
  );
};

export default Progress;