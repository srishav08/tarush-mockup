import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EstimatePage.css";

export default function EstimatePage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

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

  const handlePlaceOrder = () => {
    setShowModal(true);
  };

  return (
    <div className="full-page-wrapper">
      <header className="page-header">
        <h1 className="cursor-pointer brand-logo" onClick={()=>{navigate('/')}}>Taarush</h1>
        <nav className="header-nav">
          <a href="/" className="header-link">Home</a>
          <a href="/my-design" className="header-link">My Design</a>
        </nav>
      </header>
    <div className="estimate-page full-width">
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

          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>

      {showModal && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <span className="close-btn" onClick={() => navigate('/')}>
              &times;
            </span>
            <h2>✅ Order Confirmed!</h2>
            <p>Your order has reached us. We'll get in touch with you shortly.</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
