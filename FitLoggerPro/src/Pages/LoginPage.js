import React from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../firebase"; // Import auth from firebase.js
import Footer from "./Components/FooterSection";

function LoginPage() {
  const navigate = useNavigate(); 

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      navigate("/profile");
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="flex justify-center items-center">
        <button className="btn btn-primary mb-3" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
