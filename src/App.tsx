import React, { useState } from "react";
import Header from "./components/Header";
import Video from "./components/Video";
import Text from "./components/Text";
import InfoSection from "./components/InfoSection";
import "./App.css";

function App() {
  const [showPricing, setShowPricing] = useState(false);
  const pricingDetails = `Lesprijs privé per les
																20 min\t18 euro
																30 min\t23 euro

																Lesprijs duo per les per persoon
																30 min\t15 euro
																60 min\t30 euro
														
Lesprijzen voor groepen vanaf 3 personen afhankelijk van de situatie. Zeker ook mogelijk!

Facturen worden begin van de maand verstuurd voor de betreffende lessen in de maand, exclusief vakanties. Bij afwezigheid (van beide kanten) wordt de les ingehaald op een ander moment mits het minstens 24 uur vantevoren is gecommuniceerd.`;


  return (
    <div>
      <Header />
      <div className="container">
        <div className="text-container">
          <Text />

            <InfoSection
              title="Prijzen"
              details={pricingDetails}
            />
        </div>

        <Video />
      </div>
    </div>
  );
}

export default App;
