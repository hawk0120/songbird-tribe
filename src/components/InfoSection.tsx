import React, {useState} from "react";
import "./InfoSection.css";

type InfoSectionProps = {
  title: string;
  details: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({title, details}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleVisibility = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`hover-container ${isActive ? "active" : ""}`}
      onClick={toggleVisibility} 
    >
      <div className="hover-trigger"><u>{title}</u></div>
      <div className={`hidden-section ${isActive ? "visible" : ""}`}>
        {details}
      </div>
    </div>
	)
};

export default InfoSection;
