// src/pages/EstimatePage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EstimatePage.css";

export default function EstimatePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.image || !state?.selections) {
    return (
      <div className="estimate-page">
        <h2>No design data found.</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const { image, selections } = state;

  const basePrice = 50000;
  const additionalCost = Object.keys(selections).length * 2500;
  const totalEstimate = basePrice + additionalCost;

  return (
    <div className="estimate-page">
      <h1>Estimated Price for Your Design</h1>

      <div className="estimate-content">
        <img src={image} alt="Selected Design" className="estimate-image" />

        <div className="estimate-details">
          <h3>Selected Colors:</h3>
          <ul>
            {Object.entries(selections).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>

          <div className="estimate-summary">
            <p><strong>Base Price:</strong> ₹{basePrice.toLocaleString()}</p>
            <p><strong>Customization Charges:</strong> ₹{additionalCost.toLocaleString()}</p>
            <hr />
            <h2>Total Estimate: ₹{totalEstimate.toLocaleString()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
