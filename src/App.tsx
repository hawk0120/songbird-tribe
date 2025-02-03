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
    <div>
      <Header />
      <div className="container">
        <Video />
        <Text />
        <Buttons onPricingClick={() => setShowPricing(true)} />
        {showPricing && <PricingModal onMouseEnter={() => setShowPricing(false)} />}
      </div>
    </div>
  );
}

export default App;
