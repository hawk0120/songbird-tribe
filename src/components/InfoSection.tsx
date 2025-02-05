import React from "react";
import "./InfoSection.css";

type InfoSectionProps = {
  title: string;
  details: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({title, details}) => {
  return (
    <div className="hover-container">
      <p className="hover-trigger">{title}</p>
      <p className="hidden-section">{details}</p>
    </div>
  );
};

export default InfoSection;
