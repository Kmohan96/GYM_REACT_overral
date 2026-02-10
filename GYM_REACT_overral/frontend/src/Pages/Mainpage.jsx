// src/Pages/MainPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles//Mainpage.css";

function MainPage() {
  const [isDark, setIsDark] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className={`mainpage-layout ${isDark ? "dark" : "light"}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="logo">GymTracker</h1>
        </div>
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <div className="profile-toggle">
            <button
              className="profile-btn"
              onClick={() => setIsProfileOpen((prev) => !prev)}
            >
              👤 Profile
            </button>
            {isProfileOpen && (
              <div className="profile-dropdown">

<Link to="/ContactForm">My Profile</Link>
                <Link to="/Settings">Settings</Link>
                <Link to="/ThankYou">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul className="sidebar-links">
            <li>
              <Link to="/admin" className="sidebar-btn">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/trainer-login" className="sidebar-btn">
                Trainer
              </Link>
            </li>
            <li>
              <Link to="/register" className="sidebar-btn">
                Register
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main content (gym section) */}
        <main className="main-content">
          <section className="gym-hero">
            <h2>Transform Your Body</h2>
            <p>
              Join our gym today and start your fitness journey with expert
              trainers and modern equipment.
            </p>
            <Link to="/register" className="hero-cta">
              Become a Member
            </Link>
          </section>

          <section className="gym-features">
            <div className="feature-card">
              <h3>Personal Training</h3>
              <p>One‑on‑one sessions tailored to your goals.</p>
            </div>
            <div className="feature-card">
              <h3>Group Classes</h3>
              <p>High‑energy group workouts for all levels.</p>
            </div>
            <div className="feature-card">
              <h3>Progress Tracking</h3>
              <p>Track workouts, weight, and body metrics.</p>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 GymTracker. All rights reserved.</p>
        <p>
          <Link to="/ContactForm">About</Link> · <Link to="/ContactForm">Contact</Link> ·{" "}
          <Link to="/ContactForm">Privacy</Link>
        </p>
      </footer>
    </div>
  );
}

export default MainPage;
