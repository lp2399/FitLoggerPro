import React from "react";
import Footer from "./Components/FooterSection";

const FeaturesPage = () => {
  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <div className=" font-sans">
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-primary">Features</h1>
          <p className="text-gray-700 mt-4 mb-8">
            Explore the features of our fitness tracking web application.
          </p>
        </main>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Track Your Fitness Progress
        </h1>
        <p className="text-gray-700 mt-4 mb-8">
          Stay on top of your fitness goals and monitor your progress with our
          easy-to-use web application.
        </p>
        <h2 className="mb-4">Empower Your Fitness Journey with FitLoggerPro</h2>
      </div>
      <section className="features">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://freesvg.org/img/1506603007.png"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "250px", maxWidth: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">User Profile</h5>
                <p className="card-text">
                  Create a personalized account to store your progress
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://freesvg.org/img/1472534106.png"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "250px", maxWidth: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Workout Tracking</h5>
                <p className="card-text">
                  Log your strength training exercises, including time, sets,
                  weight, and repetitions.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://freesvg.org/img/1447529580.png"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "250px", maxWidth: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Nutritional Tracking</h5>
                <p className="card-text">
                  Monitor your daily caloric, and macronutrient intake to
                  optimize your nutrition and fitness goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://freesvg.org/img/Icon-Padlock-Monochrome.png"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "250px", maxWidth: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Data Security</h5>
                <p className="card-text">
                  Rest assured with robust data security measures, you have the ability to delete or retrieve your data
                  at any time.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Opensource.svg"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "250px", maxWidth: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Open and Transparent</h5>
                <p className="card-text">
                  FitLoggerPro is open-source and free to use, empowering
                  everyone to reach their fitness goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static.vecteezy.com/system/resources/previews/006/662/139/non_2x/artificial-intelligence-ai-processor-chip-icon-symbol-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-free-vector.jpg"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "250px", maxWidth: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Personal Trainer</h5>
                <p className="card-text">
                  We hope in the future to include AI powered tools to help you
                  reach your goals{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta">
        <a href="/login" className="signup-button">
          Get Started for Free
        </a>
      </div>
      <Footer />
    </main>
  );
};

export default FeaturesPage;
