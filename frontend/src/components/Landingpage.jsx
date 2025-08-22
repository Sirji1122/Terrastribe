import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>🌍 Welcome to TerraStride</h1>
        <p className="tagline">Gamified Carbon Footprint Tracker & Eco Challenges Platform</p>
        <button className="cta-btn" onClick={() => navigate("/signup")}>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose TerraStride?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>📊 Track Carbon Footprint</h3>
            <p>Measure your daily carbon emissions with an easy-to-use calculator.</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Eco Challenges</h3>
            <p>Take part in sustainability tasks and build greener habits.</p>
          </div>
          <div className="feature-card">
            <h3>🤝 Community</h3>
            <p>Connect with like-minded people and share your eco-journey.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About TerraStride</h2>
        <p>
          TerraStride is designed to encourage individuals to take small but impactful 
          steps towards reducing carbon footprint. By combining gamification with 
          sustainability, we aim to create a healthier planet together.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} TerraStride | All Rights Reserved</p>
      </footer>
    </div>
  );
}
