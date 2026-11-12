import React from "react";
import "./Video.css";

const Video: React.FC = () => {

return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/dmIsvmaGwc8"
        title="Music Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
