import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = ({ url }) => {
  return (
    <div style={{ height: "min-content", width: "min-content", marginTop: "4.8%", display: 'inline-block', whiteSpace: 'none', position: 'sticky', top: '0' }}>
      {!url && (
        <ReactPlayer
          url="https://cdn.videvo.net/videvo_files/video/free/2013-08/small_watermarked/hd0983_preview.webm"
          muted={false}
          playing={true}
          loop={true}
        />
      )}
      {url && (
        <ReactPlayer
          url={url}
          style={{ width: "30%", flex: 1, height: "48%", marginRight: "2%" }}
          muted={false}
          playing={true}
          loop={true}
        />
      )}
    </div>
    
  );
};

export default Video;
