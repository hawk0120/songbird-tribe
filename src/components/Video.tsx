import React from "react";
import "./Video.css";

const Video: React.FC = () => {

return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dmIsvmaGwc8"
        title="Music Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

