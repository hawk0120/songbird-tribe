import React, { useState } from "react";
import "./Text.css";

const Text: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const contactDetails = `Telefoon: +31 06 23506554 
													Email: merelvdwielen@gmail.com`;

  const toggleVisibility = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`text-component-container ${isActive ? "active" : ""}`}
      onClick={toggleVisibility}
    >
      <p>
        In de binnenstad van Middelburg kan je bij Merel gecoacht worden in
        zang, songwriting en akoestisch gitaar. Ze is afgestudeerd aan het
        conservatorium in Enschede met hoofdvakken zang en songwriting en een
        minor akoestisch gitaar. Ze heeft in Utrecht ook zang gestudeerd.
        Tijdens en sinds haar opleiding heeft ze les gegeven en opgetreden met
        haar eigen muziek. Sinds kort is ze geland in Middelburg en ze kijkt er
        naar uit een toevoeging te zijn als muzikant, docent en mede-burger!
      </p>
      <p>
        In haar lessen kijkt Merel naar de eigen motivatie en doelen van de
        persoon om daar vervolgens op te bouwen. Bij kinderen worden er
        mogelijkheden gegeven en gemotiveerd om zelf op zoek te gaan. Merel
        stuurt hierbij en coacht ze verder. Een paar kernwaarden in haar lessen:
        ontdekken en authenticiteit.
      </p>
      <p className="text-component-underline">
        Bel of email Merel direct voor vragen of om een 30 minuten proefles
        (€10,-) te boeken.
      </p>
      {isActive && <p className="contact-details">{contactDetails}</p>}
    </div>
  );
};

export default Text;
