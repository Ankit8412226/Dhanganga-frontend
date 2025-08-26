import React from "react";

const AssociateCard = ({
  title,
  imageSrc = "dhanganga.jpg",
  logoText = "DHANGANGA",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      {/* Service Title */}
      <div className="mb-4">
        <h3 className="text-gray-800 font-semibold text-sm mb-1 uppercase tracking-wide">
          {title}
        </h3>
      </div>

      {/* Logo/Avatar */}
      <div className="mb-4">
        <div className="relative">
          <img
            src={imageSrc}
            alt={logoText}
            className="w-20 h-20 rounded-full border-4 border-orange-200 object-cover"
          />
        </div>
        <p className="text-blue-600 font-bold text-sm mt-2 tracking-wide">
          {logoText}
        </p>
      </div>

      {/* Next Button */}
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer hover:scale-105 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 mb-4 w-full">
        Next
      </button>
    </div>
  );
};

export default AssociateCard;
