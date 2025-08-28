// src/pages/AppointmentBooking.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";

const AppointmentBooking = () => {
  const { state } = useLocation(); // Service details passed from previous page
  const navigate = useNavigate();

  const [form, setForm] = useState({
    reference: "",
    name: "",
    mobile: "",
    email: "",
    file: null,
    comment: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm({
      ...form,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to PaymentPage with query params
    navigate(
      `/payment?name=${encodeURIComponent(
        form.name
      )}&service=${encodeURIComponent(
        state?.subCategory || "Selected Service"
      )}&amount=${encodeURIComponent(state?.price || "0")}`
    );
  };

  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-blue-50 via-white to-purple-100 p-6 flex justify-center items-center">
      <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 w-full max-w-2xl border border-gray-100">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Book Your Appointment
        </h2>

        {/* Service Info */}
        {state && (
          <div className="mb-6 text-center">
            <p className="text-lg font-semibold text-blue-600 tracking-wide">
              {state.subCategory}
            </p>
            <p className="text-sm text-gray-500 italic">
              Category: {state.category}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Reference */}
          <div className="relative">
            <input
              type="text"
              name="reference"
              value={form.reference}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent"
            />
            <label className="absolute left-4 -top-2.5 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Reference
            </label>
          </div>

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent"
            />
            <label className="absolute left-4 -top-2.5 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Name *
            </label>
          </div>

          {/* Mobile */}
          <div className="relative">
            <input
              type="text"
              name="mobile"
              required
              value={form.mobile}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent"
            />
            <label className="absolute left-4 -top-2.5 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Mobile *
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent"
            />
            <label className="absolute left-4 -top-2.5 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Email
            </label>
          </div>

          {/* File Upload */}
          <div className="relative border-dashed border-2 border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition">
            <Upload className="text-gray-400 mb-2" size={28} />
            <label className="text-gray-600 cursor-pointer text-sm">
              {form.file ? form.file.name : "Upload Document (if any)"}
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Comment */}
          <div className="relative">
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder=" "
              rows="3"
              className="peer w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent"
            />
            <label className="absolute left-4 -top-2.5 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
              Comment
            </label>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              required
              className="accent-blue-500"
            />
            I agree to the{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Terms & Conditions
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Register Appointment & Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
