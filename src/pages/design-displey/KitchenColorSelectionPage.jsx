import React, { useState, useEffect } from "react";
import "./KitchenColorSelectionPage.css";
import { useNavigate } from "react-router-dom";
import FullPageLoader from "../../components/ui/loader/FullPageLoader";

export default function KitchenColorSelectionPage() {
  const [selections, setSelections] = useState({});
  const navigate = useNavigate();
  const [wallColour, setWallColour] = useState("default");
  const [countertopColour, setCountertopColour] = useState("default");
  const [cabinetColour, setCabinetColour] = useState("default");
  const [imageName, setImageName] = useState("kitchen-image.jpeg");
  const [showLoader, setShowLoader] = useState(false);

  const colorOptions = [
    "White", "Pink", "Gray", "Olive", "Blue"
  ];

  const counterTopColourOptions = [
    "White", "Black"
  ]

  const cabinetColourOptions = [
    "Black", "White", "Pink", "Brown"
  ]

  const dropdowns = [
    "Wall Color",
    "Cabinet Color",
    "Countertop Color",
    // "Backsplash Color",
    // "Floor Color",
    // "Appliance Color",
    // "Handle Color",
    // "Accent Color"
  ];

  useEffect(()=>{
    if(wallColour && countertopColour && cabinetColour && 
      !(wallColour=="default" && countertopColour=="default" && cabinetColour=="default")
      ) {
        setTimeout(()=>{
        let imageNameString = wallColour+'-'+countertopColour+'-'+cabinetColour;
        setImageName(imageNameString+'.png');
        setShowLoader(false);
      },3000)
    }
  },[wallColour,countertopColour,cabinetColour])

  const handleChange = (e, dropdown) => {
    setSelections({ ...selections, [dropdown]: e.target.value });
    if(dropdown=="Wall Color") {
      e.target.value==""?setWallColour("default"): setWallColour(e.target.value.toLowerCase());
    }
    else if(dropdown=="Cabinet Color") {
      e.target.value==""?setCabinetColour("default"): setCabinetColour(e.target.value.toLowerCase());
    }
    else if(dropdown=="Countertop Color") {
      e.target.value==""?setCountertopColour("default"): setCountertopColour(e.target.value.toLowerCase());
    }

    setShowLoader(true);
    

  };

  return (
    <div className="full-page-wrapper">
      {showLoader && <FullPageLoader message="Applying Changes" />}
      <header className="page-header">
        <h1 className="brand-logo" onClick={()=>{navigate('/')}}>Taarush</h1>
        <nav className="header-nav">
          <a href="/" className="header-link">Home</a>
          <a href="/my-design" className="header-link">My Design</a>
        </nav>
      </header>
    <div className="color-selection-container">
      <h1 className="color-selection-title">Customize Your Kitchen</h1>

      <div className="kitchen-main-content">
        <div className="kitchen-image-container">
          <img
            src={`/src/assets/kitchen-mocks/${imageName}`}
            alt="Kitchen Preview"
            className="kitchen-preview-image"
          />
        </div>

        <div className="dropdown-grid">
          {dropdowns.map((label) => (
            <div key={label} className="dropdown-wrapper">
              <label className="dropdown-label">{label}</label>
              <select
                className="dropdown-select"
                value={selections[label] || ""}
                onChange={(e) => handleChange(e, label)}
              >
                <option value="">Select a color</option>
                {label==="Wall Color" && colorOptions.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
                {label==="Cabinet Color" && cabinetColourOptions.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
                {label==="Countertop Color" && counterTopColourOptions.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
