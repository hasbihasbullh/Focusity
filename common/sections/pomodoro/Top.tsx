import React from "react";

export default function Top() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pb-4 sm:pb-6">
      {/* Top Left - Logo */}
      <div className="top-left">
        <div className="logo">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">Focusity</h2>
        </div>
      </div>

      {/* Top Right - Quotes */}
      <div className="top-right">
        <div className="quotes">
          <p className="text-sm sm:text-base text-white italic text-center sm:text-right">Stay focused and conquer your tasks</p>
        </div>
      </div>
    </div>
  );
}