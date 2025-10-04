"use client"
import React, { useState, useEffect } from "react";
import { Clock, Settings, Expand, Minimize } from "lucide-react";

export default function Bottom() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fungsi untuk toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // Masuk fullscreen (target root document)
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Failed to enter fullscreen:", err);
      });
    } else {
      // Keluar fullscreen
      document.exitFullscreen().catch((err) => {
        console.error("Failed to exit fullscreen:", err);
      });
    }
  };

  // Deteksi perubahan status fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup listener
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-4 sm:pt-6">
      {/* Bottom Left - Star On GitHub Button (Kecil dengan Ikon GitHub) */}
      <div className="bottom-left hidden sm:flex justify-center sm:justify-start space-x-4 order-2 sm:order-1">
        <button className="flex items-center gap-1.5 bg-gray-800 text-white px-3 py-1.5 rounded-md hover:bg-gray-700 transition duration-200 group text-xs">
          {/* GitHub Icon */}
          <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>

          {/* Text dan Count */}
          <span className="font-medium">Star On GitHub</span>

          {/* Star Count */}
          <span className="bg-gray-700 px-1.5 py-0.5 rounded text-xs font-semibold group-hover:bg-gray-600 transition duration-200">0</span>
        </button>
      </div>

      {/* Bottom Right - Utility Icons (Center on Mobile) */}
      <div className="bottom-right flex justify-center sm:justify-end space-x-4 w-full sm:w-auto order-1 sm:order-2">
        <button className="text-gray-600 hover:text-gray-800 transition duration-200 p-1">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button className="text-gray-600 hover:text-gray-800 transition duration-200 p-1">
          <Settings className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          className="text-gray-600 hover:text-gray-800 transition duration-200 p-1"
          onClick={toggleFullscreen}
          title={isFullscreen ? "Keluar Fullscreen" : "Masuk Fullscreen"}
        >
          {isFullscreen ? (
            <Minimize className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Expand className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>
    </div>
  );
}