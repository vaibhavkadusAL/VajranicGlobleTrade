import React, { useEffect, useRef } from 'react';
import './BackgroundVideo.css';

export default function BackgroundVideo({ videoSrc, children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to ensure autoplay works on mount, especially for mobile
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [videoSrc]);

  return (
    <div className="bg-video-container">
      <video
        ref={videoRef}
        className="bg-video"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="bg-video-overlay"></div>
      
      {/* Content that sits on top of the video */}
      <div className="bg-video-content">
        {children}
      </div>
    </div>
  );
}
