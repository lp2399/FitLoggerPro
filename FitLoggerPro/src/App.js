import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import FeaturesPage from "./Pages/FeaturesPage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <AuthProvider>
            {" "}
            {/* Wrap the Routes component with AuthProvider */}
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
