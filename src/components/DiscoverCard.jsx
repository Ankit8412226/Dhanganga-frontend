import React from "react";

const DiscoverCard = ({
  title,
  titleHindi,
  price,
  duration,
  durationType,
  requirements = [],
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
        {titleHindi && <p className="text-gray-600 text-sm">({titleHindi})</p>}
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

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-800">₹{price}</span>
        <div className="text-gray-500 text-sm mt-1">
          {durationType} {duration}
        </div>
      </div>

      {/* Next Button */}
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer hover:scale-105 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 mb-4 w-full">
        Next
      </button>

      {/* Requirements */}
      {requirements.length > 0 && (
        <div className="text-left w-full">
          <h4 className="text-gray-800 font-medium mb-2 text-center">
            आवश्यक दस्तावेज
          </h4>
          <ul className="text-gray-600 text-sm space-y-1">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">
                  ✓
                </span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DiscoverCard;
