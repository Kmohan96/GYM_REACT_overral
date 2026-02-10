import React from "react";
import "../Styles/ThankYou.css"; // same CSS file

const ThankYouCard = () => {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-IN"); // e.g., 04/02/2026

  return (
    <section className="thank-you-card">
      <div className="card-container">
        <div className="card-front">
          <h2 className="card-title">Thank You for Visiting</h2>
          <p className="card-subtitle">
            We truly appreciate your time and interest.
          </p>
          <div className="card-footer">
            <span className="card-date">{dateStr}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouCard;
