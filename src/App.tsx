import React, { useState } from "react";
import Header from "./components/Header";
import Video from "./components/Video";
import Text from "./components/Text";
import Buttons from "./components/Button";
import PricingModal from "./components/PricingModal";
import "./App.css";

function App() {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="container">
      <Header />
      <Video />
      <Text />
      <Buttons onPricingClick={() => setShowPricing(true)} />
      {showPricing && <PricingModal onClose={() => setShowPricing(false)} />}
    </div>
  );
}

export default App;
