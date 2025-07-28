import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModularKitchenHomepage from "./pages/dealer-landing/ModularKitchenHomepage";
import KitchenColorSelectionPage from "./pages/design-displey/KitchenColorSelectionPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModularKitchenHomepage />} />
        <Route path="/my-design" element={<KitchenColorSelectionPage />} />
      </Routes>
    </Router>
  );
}
