// src/pages/ServiceDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Clock, Tag } from "lucide-react";

const ServiceDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <p className="text-lg text-gray-700 mb-4">😕 No service selected.</p>
        <button
          onClick={() => navigate("/appointment")}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md hover:scale-105 transition-transform"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { category, subCategory, price, days, documents } = state;

  return (
    <div className="min-h-screen mt-6 bg-gradient-to-br from-blue-50 via-white to-purple-100 flex justify-center items-center p-6">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-lg w-full border border-gray-100 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          {subCategory}
        </h1>
        <p className="text-gray-500 text-center mb-8">
          <span className="font-medium text-gray-700">Category:</span>{" "}
          {category}
        </p>

        {/* Service Card */}
        <div className="border rounded-2xl p-8 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 text-center">
          <img
            src="/dhanganga.jpg"
            alt="DhanGanga"
            className="w-24 h-24 mx-auto mb-6 drop-shadow-md"
          />
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <Tag className="text-blue-500 mb-1" size={20} />
              <p className="text-lg font-semibold text-gray-800">{price}</p>
              <p className="text-xs text-gray-500">Price</p>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="text-purple-500 mb-1" size={20} />
              <p className="text-lg font-semibold text-gray-800">{days}</p>
              <p className="text-xs text-gray-500">Duration</p>
            </div>
          </div>
          <button
            onClick={() =>
              navigate("/appointment-booking", {
                state: { category, subCategory, price, days, documents },
              })
            }
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Next
          </button>
          {documents?.length > 0 && (
            <div className="mt-8 text-left">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <FileText className="text-blue-500" size={18} />
                आवश्यक दस्तावेज
              </h3>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                {documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
