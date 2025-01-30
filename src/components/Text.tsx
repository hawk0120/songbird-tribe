import React from "react";
import "./Text.css";

const Text: React.FC = () => {
  return (
    <p className="text">
      In de binnenstad van Middelburg kan je bij Merel gecoacht worden in zang,
      songwriting en akoestisch gitaar...
      <br />
      <strong>Bel of email Merel direct</strong> voor vragen of om een 30
      minuten proefles (€10,-) te boeken.
    </p>
  );
};

export default Text;

