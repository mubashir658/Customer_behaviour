import React from "react";
import { Link } from "react-router-dom"; // Added for navigation
import Tagline from "./Tagline.jsx";
import Box from "./Box.jsx";
import "./Homepage.css";

function Homepage() {
  const insuranceTypes = [
    {
      title: "Life Insurance Policy",
      description: "Secure your family's future with comprehensive life coverage",
      icon: "🛡️",
      path: "/login", // Changed to /login
    },
    {
      title: "Vehicle Insurance Policy",
      description: "Protect your vehicle with customizable coverage options",
      icon: "🚗",
      path: "/login",
    },
    {
      title: "Health Insurance Policy",
      description: "Get the best healthcare coverage for you and your family",
      icon: "🏥",
      path: "/login",
    },
    {
      title: "Home Insurance Policy",
      description: "Safeguard your home against unexpected damages",
      icon: "🏠",
      path: "/login",
    },
  ];

  return (
    <div className="homepage">
      <header className="homepage-hero">
        <h1>Welcome to Your Insurance Hub</h1>
        <p>Explore coverage options tailored for you.</p>
        <Link to="/login" className="hero-btn">
          Get Started
        </Link>
      </header>

      <main className="homepage-main">
        <Tagline />

        <section className="insurance-options">
          <h2 className="section-title">Choose Your Protection</h2>
          <p className="section-subtitle">Select the type of insurance you need</p>

          <div className="box-grid">
            {insuranceTypes.map((insurance) => (
              <Box
                key={insurance.title}
                title={insurance.title}
                description={insurance.description}
                icon={insurance.icon}
                path={insurance.path}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="homepage-footer">
        <p>
          Need help choosing? <Link to="/helpline">Talk to an expert</Link>
        </p>
        <nav className="footer-nav">
          <Link to="/about">About Us</Link>
          <Link to="/helpline">Helpline</Link>
          <Link to="/login">Login</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Homepage;