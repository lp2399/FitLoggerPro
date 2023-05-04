import React from "react";
import BodySection from "./Components/BodySection";
import FooterSection from "./Components/FooterSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <BodySection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
