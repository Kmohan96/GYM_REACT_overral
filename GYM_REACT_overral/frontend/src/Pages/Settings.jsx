import React from "react";
import "../Styles/ThankYou.css"; // reuse the same CSS

const Settings = () => {
  // Get current date in DD/MM/YYYY format
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-IN"); // e.g., 04/02/2026

  return (
    <section className="thank-you-card">
      <div className="card-container">
        <div className="card-front">
          <h2 className="card-title">Settings</h2>
          <p className="card-subtitle">
            This section is under admin control.
          </p>
          <div className="card-footer">
            <span className="card-date">{dateStr}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
