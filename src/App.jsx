import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModularKitchenHomepage from "./pages/dealer-landing/ModularKitchenHomepage";
import KitchenColorSelectionPage from "./pages/design-displey/KitchenColorSelectionPage";
import EstimatePage from "./pages/show-estimate/EstimatePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModularKitchenHomepage />} />
        <Route path="/my-design" element={<KitchenColorSelectionPage />} />
        <Route path="/estimate" element={<EstimatePage />} />
      </Routes>
    </Router>
  );
}
