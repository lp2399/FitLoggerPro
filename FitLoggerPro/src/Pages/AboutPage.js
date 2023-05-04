import React from "react";
import Button from "./Components/Button";
import Footer from "./Components/FooterSection";
import "../Styles/aboutpage.css";
const AboutPage = () => {
  const handleDonateClick = () => {
    console.log("Redirect to the donation page or open a donation modal");
  };

  const handleContributeClick = () => {
    setTimeout(
      'window.location.href="https://github.com/lp2399/FitLoggerPro"',
      0
    );
  };

  return (
    <div className="open-source container">
      <h1 className="mt-5 mb-4">Our Commitment to Open-Source Fitness</h1>
      <p>
        At FitLoggerPro, we believe that fitness is a crucial aspect of human
        health, and we are committed to making our services accessible to
        everyone. We've built our application with a strong focus on open-source
        development, making it free to use and allowing the community to
        contribute to its growth and improvement.
      </p>
      <p>
        We understand that maintaining a high-quality application requires
        resources, and while we don't charge for our services, we do accept
        donations from our users. Your contributions help us cover server costs,
        ongoing development, and support to ensure FitLoggerPro remains the best
        fitness tracking tool available.
      </p>
      <div className="donate-cta mb-4">
        <button className="btn btn-primary mb-3" onClick={handleDonateClick}>
        Support FitLoggerPro
        </button>
      </div>
      <div className="contribute-cta mb-5">
        <button className="btn btn-primary mb-3" onClick={handleContributeClick}>
          Contribute to FitLoggerPro
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
