import React, { useState } from "react";
import "./Button.css";

type ButtonProps = {
  onPricingClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ onPricingClick }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="buttons">
      <button onClick={() => setShowContact(!showContact)}>Bel / Email</button>
      {showContact && (
        <p className="contact-details">
          Telefoon: 123-456-7890 <br />
          Email: merel@example.com
        </p>
      )}
      <button onClick={onPricingClick}>Tarieven</button>
    </div>
  );
};

export default Button;
