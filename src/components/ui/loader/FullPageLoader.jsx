import React from "react";
import "./FullPageLoader.css";

export default function FullPageLoader(props) {
  const {message} = props;
  return (
    <div className="loader-overlay">
      <div className="loader-center">
        <div className="loader-spinner" />
        <p className="loader-label">{message}...</p>
      </div>
    </div>
  );
}
