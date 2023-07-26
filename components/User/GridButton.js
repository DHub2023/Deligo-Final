// components/GridButton.js
import React from "react";

const GridButton = ({ title, paragraph, icon }) => {
  return (
    <div className="bg-gray-200 p-4 m-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:bg-gray-300 hover:scale-105">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-center">{paragraph}</p>
    </div>
  );
};

export default GridButton;
