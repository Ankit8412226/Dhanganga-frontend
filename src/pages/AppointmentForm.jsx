import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const BookingModal = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  console.log("BookingModal is rendering"); // Add this to debug

  const categories = [
    "DhanGanga online public kendra",
    "DhanGanga Association",
    "DhanGanga physical Treatment Home",
    "DhanGanga Store",
    "DhanGanga real Estate",
    "DhanGanga Hire Service",
  ];

  const subCategories = {
    "DhanGanga online public kendra": [
      "Online Services",
      "Digital Solutions",
      "E-governance",
    ],
    "DhanGanga Association": [
      "Community Services",
      "Social Programs",
      "Member Benefits",
    ],
    "DhanGanga physical Treatment Home": [
      "Physiotherapy",
      "Wellness Programs",
      "Health Checkup",
    ],
    "DhanGanga Store": ["Products", "Equipment", "Supplies"],
    "DhanGanga real Estate": [
      "Property Services",
      "Real Estate Consultation",
      "Investment",
    ],
    "DhanGanga Hire Service": [
      "Equipment Rental",
      "Service Booking",
      "Professional Services",
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Book appointment
        </h2>
        <p className="text-gray-600">
          It's our pleasure to have a chance to cooperate.
        </p>
      </div>

      <form className="space-y-6">
        {/* Category Dropdown */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-700"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Sub Category Dropdown */}
        <div className="relative">
          <select
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-700"
            disabled={!selectedCategory}
          >
            <option value="">Select Sub Category</option>
            {selectedCategory &&
              subCategories[selectedCategory]?.map((subCat) => (
                <option key={subCat} value={subCat}>
                  {subCat}
                </option>
              ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Get Start Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
        >
          Get Start
        </button>
      </form>

      {/* Additional Info */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Available <span className="text-blue-500">24/7</span> for emergency consultations
        </p>
      </div>
    </div>
  );
};

export default BookingModal;
