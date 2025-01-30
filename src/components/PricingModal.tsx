import React from "react";
import "./PricingModal.css";

type PricingModalProps = {
  onClose: () => void;
};

const PricingModal: React.FC<PricingModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Tarieven</h2>
        <p>Proefles: €10,- (30 minuten)</p>
        <button onClick={onClose}>Sluiten</button>
      </div>
    </div>
  );
};

export default PricingModal;
