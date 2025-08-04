import React from "react";
import "./ThankYouAnimation.css";

export default function ThankYouAnimation({ label = "Thank you!" }) {
  return (
    <div className="thank-you-overlay">
      <div className="thank-you-content">
        <div className="checkmark-circle">
          <div className="background"></div>
          <div className="checkmark"></div>
        </div>
        <p className="thank-you-label">{label}</p>
      </div>
    </div>
  );
}