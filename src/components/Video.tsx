import React from "react";
import "./Video.css";

const Video: React.FC = () => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="YOUR_VIDEO_LINK_HERE"
        title="Music Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

