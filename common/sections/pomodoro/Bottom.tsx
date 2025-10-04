"use client";
import React, { useState, useEffect } from "react";
import { Clock, Settings, Expand, Minimize } from "lucide-react";
import GitHubButton from "./GitHubButton";

export default function Bottom() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Failed to enter fullscreen:", err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error("Failed to exit fullscreen:", err);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-4 sm:pt-6">
      {/* Bottom Left - Star On GitHub Button*/}
      <div className="bottom-left hidden sm:flex justify-center sm:justify-start space-x-4 order-2 sm:order-1">
        <GitHubButton 
          repoUrl="https://github.com/hasbihasbullh/Focusity"
          showStars={true}
        />
      </div>

      {/* Bottom Right - Utility Icons (Center on Mobile) */}
      <div className="bottom-right flex justify-center sm:justify-end space-x-4 w-full sm:w-auto order-1 sm:order-2">
        <button className="text-gray-600 hover:text-gray-800 transition duration-200 p-1" onClick={toggleFullscreen} title={isFullscreen ? "Keluar Fullscreen" : "Masuk Fullscreen"}>
          {isFullscreen ? <Minimize className="w-5 h-5 sm:w-6 sm:h-6" /> : <Expand className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>
    </div>
  );
}