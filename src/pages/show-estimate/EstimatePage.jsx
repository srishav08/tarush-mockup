import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EstimatePage.css";
import FullPageLoader from "../../components/ui/loader/FullPageLoader";
import ThankYouAnimation from "../../components/ui/thank-you-animation/ThankYouAnimation";

export default function EstimatePage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showThankYouAnimation, setShowThankYouAnimation] = useState(false);

  const [materialChoice, setMaterialChoice] = useState("BWR");
  const [shutterFinish, setShutterFinish] = useState("0.8 HGL");
  const [hardwareChoice, setHardwareChoice] = useState("Indian");

  
  const { image, selections } = state;
  const basePrice = 90000;
  const additionalCost = Object.keys(selections).length * 2500;
  const totalEstimate = basePrice + additionalCost;

  
  const handlePlaceOrder = () => {
    setShowLoader(true);
    setTimeout(()=>{
      setShowLoader(false);
      setShowModal(true);
    },1000)
  };

  const handleOrderConfirm = () => {
    setShowModal(false);
    setShowThankYouAnimation(true);
    setTimeout(()=>{
      setShowThankYouAnimation(false);
      navigate('/')
    },1500)

  }
  
  if (!state?.image || !state?.selections) {
    return (
      <div className="estimate-page">
        <h2>No design data found.</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }
  return (
    <div className="full-page-wrapper">
      {showLoader && <FullPageLoader message="Placing Order" />}
      {showThankYouAnimation && <ThankYouAnimation/>}
      <header className="page-header">
        <h1 className="cursor-pointer brand-logo" onClick={()=>{navigate('/')}}>Tarush</h1>
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

          <h3>Choose Configuration:</h3>
          <div className="dropdown-group">
            <div className="dropdown-wrapper">
              <label>Base Material</label>
              <select
                value={materialChoice}
                onChange={(e) => setMaterialChoice(e.target.value)}
              >
                <option value="BWR">BWR</option>
                <option value="BWP">BWP</option>
                <option value="HDHDMR">HDHDMR</option>
              </select>
            </div>

            <div className="dropdown-wrapper">
              <label>Shutter Finish</label>
              <select
                value={shutterFinish}
                onChange={(e) => setShutterFinish(e.target.value)}
              >
                <option value="0.8 HGL">0.8 HGL</option>
                <option value="1mm HGL">1mm HGL</option>
                <option value="Acrylic">Acrylic</option>
              </select>
            </div>

            <div className="dropdown-wrapper">
              <label>Hardware & Accessories</label>
              <select
                value={hardwareChoice}
                onChange={(e) => setHardwareChoice(e.target.value)}
              >
                <option value="Indian">Indian</option>
                <option value="Hettich">Hettich</option>
                <option value="Hafele">Hafele</option>
              </select>
            </div>
          </div>

          <div className="estimate-summary">
            {/* <p><strong>Base Price:</strong> ₹{basePrice.toLocaleString()}</p>
            <p><strong>Customization Charges:</strong> ₹{additionalCost.toLocaleString()}</p>
            <hr /> */}
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
            <span className="close-btn" onClick={handleOrderConfirm}>
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
