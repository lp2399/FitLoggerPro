import React from "react";
import "../../Styles/bodysection.css";
const BodySection = () => {
  const handleButtonClick = () => {
    console.log("Button clicked in MainContent");
    // Add your desired action here
  };
  return (
    <main className="container mx-auto px-4 py-20 text-center pt-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Welcome to FitLoggerPro
        </h1>
        <p className="text-gray-700 mt-4 mb-8">
          Your all-in-one fitness tracking solution. Log your workouts, track
          your progress, and achieve your fitness goals with our easy-to-use web
          application.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-primary mt-16">
        Why Choose FitLoggerPro?
      </h2>
      <p className="text-gray-700 mt-4 mb-8">
        FitLoggerPro is designed to help you make the most of your fitness
        journey. Our app makes it easy to:
      </p>
      <section className="features">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <div className="card-body">
                <div className="feature">
                  <h3>Log Workouts</h3>
                  <p>
                    Keep track of your exercises, sets, reps, and weights with
                    our simple workout logger.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="feature">
                  <h3>Monitor Progress</h3>
                  <p>
                    Visualize your progress with charts and graphs to see how
                    far you've come.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="feature">
                  <h3>Stay Motivated</h3>
                  <p>
                    Set goals, unlock achievements, and celebrate your
                    milestones to stay motivated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta">
        <h2 className="text-3xl font-bold text-primary mt-16">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-gray-700 mt-4 mb-8">
          Join FitLoggerPro today and take the first step towards a healthier,
          happier you.
        </p>
        <a href="/login" className="signup-button">
          Get Started for Free
        </a>
      </div>
    </main>
  );
};

export default BodySection;
