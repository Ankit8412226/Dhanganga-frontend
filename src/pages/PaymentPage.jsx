// src/pages/PaymentPage.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name") || "Customer";
  const service = queryParams.get("service") || "Selected Service";
  const amount = queryParams.get("amount") || "0";

  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    // Simulate successful payment
    setTimeout(() => {
      setPaid(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      {!paid ? (
        <>
          <h3 className="uppercase text-gray-500 tracking-widest text-sm mb-2">
            Payment
          </h3>
          <h1 className="text-3xl font-bold text-gray-800">
            Pay <span className="text-blue-600">and book your service.</span>
          </h1>

          <div className="bg-white shadow-lg rounded-2xl p-8 mt-6 w-full max-w-md text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Pay Now"
              className="w-24 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-500 mt-1">{service}</p>
            <p className="mt-2 font-medium text-lg">Amount: ₹{amount}</p>

            <button
              onClick={handlePayment}
              className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-lg font-bold py-3 rounded-xl text-white transition duration-300"
            >
              Pay Now
            </button>
          </div>
        </>
      ) : (
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center animate-fadeIn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            alt="Success"
            className="w-24 mx-auto mb-4 animate-bounce"
          />
          <h1 className="text-2xl font-bold text-green-600 mb-2">
            Payment Successful 🎉
          </h1>
          <p className="text-gray-700">
            Thank you, <span className="font-semibold">{name}</span>!
          </p>
          <p className="text-gray-500 mt-1">
            Your booking for <span className="font-medium">{service}</span> has
            been confirmed.
          </p>
          <p className="mt-3 text-lg font-semibold text-gray-800">
            Paid: ₹{amount}
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-lg font-bold py-3 rounded-xl text-white transition duration-300"
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
