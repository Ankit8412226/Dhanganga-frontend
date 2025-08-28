// src/pages/BookingModal.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingModal = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const navigate = useNavigate();

  // ✅ All service data here
  const serviceData = {
    "PAN CARD": {
      price: "₹130",
      days: "Maximum 2 days",
      documents: ["Photo", "Aadhar Card"],
    },
    "NEW G.S.T": {
      price: "₹725",
      days: "Maximum 12 days",
      documents: [
        "Aadhar Card",
        "Photo",
        "Bank Passbook",
        "Proof of place of doing Business.",
      ],
    },
    "G. S. T. FILING": {
      price: "₹350",
      days: "Maximum 3 days",
      documents: ["All related bills", "I.D & Password"],
    },
    "MARRIAGE CERTIFICATE": {
      price: "₹2700",
      days: "Maximum 3 days",
      documents: [" Age Proof ", "Address Proof", "Joint Passport Photo"],
    },
    "ELECTRICITY BILL": {
      price: "₹1",
      days: "Maximum 1 day",
      documents: [
        "Customer I.D.",
        "The amount of Electricity Consumed (शाही की गई बिजली बिल का स्कैन)",
      ],
    },
    "BIRTH CERTIFICATE": {
      price: "₹550",
      days: "Minimum 7 days",
      documents: [
        "Parents (माता के माता-पिता का आधार कार्ड)",
        "Proof of Birth (जन्म का प्रमाण)",
      ],
    },
    "GOVT RENT RECEIPT": {
      price: "₹20",
      days: "Maximum 1 day",
      documents: ["Age Proof", "Address Proof", "Joint Passport Photo"],
    },
    "DRIVING LICENSE": {
      price: "₹3600",
      days: "Minimum 30 days",
      documents: [
        "Age Proof",
        "Address Proof",
        "Passport Photo",
        "Blood group Proof",
      ],
    },
    "KOVID-19 CORONA VACCINE CERTIFICATE": {
      price: "₹10",
      days: "Maximum 1 day",
      documents: ["Registered mobile number only"],
    },
    "FOOD LICENSE": {
      price: "₹1250",
      days: "Minimum 7 days",
      documents: [
        "Self Attested Photograph",
        "Aadhar or Voter or Pan or Rasan card",
        "Shop Detail",
      ],
    },
    "TRADE LICENSE": {
      price: "₹1600",
      days: "Minimum 7 days",
      documents: [
        "Photo",
        "Aadhar Card",
        "Bank Passbook",
        "Proof of place of doing Business",
      ],
    },
    "DEATH CERTIFICATE": {
      price: "₹600",
      days: "Minimum 7 days",
      documents: [
        "Aadhar Card of the deceased guardian & deceased (मृतक एवं मृतक के आवेदक का आधार कार्ड)",
        "Proof of death (मौत का सबूत)",
      ],
    },
    "F.I.R. of any police station": {
      price: "₹50",
      days: "Maximum 1 day",
      documents: ["Only for Detail"],
    },
    "I. T. R. Filing": {
      price: "₹650",
      days: "Maximum 2 days",
      documents: ["Pan Card", "Aadhar Card"],
    },
    "L. P. C.": {
      price: "₹900",
      days: "Minimum 3 days",
      documents: ["Aadhar Card", "Current Lagan rasid", "Photo"],
    },
    "AADHAR CARD DOWNLOADING VIA O.T.P": {
      price: "₹20",
      days: "Maximum 1 day",
      documents: ["Aadhar Number", "Mobile Number"],
    },
    "VOTER LIST NAME ADDING": {
      price: "₹30",
      days: "Minimum 7 days",
      documents: ["Pan Card", "Aadhar Card", "Bank Passbook"],
    },
    "RATIONCARD APPLY": {
      price: "₹50",
      days: "Maximum 1 day",
      documents: [
        "Self Attested Photograph",
        "Aadhar / Voter ID / PAN",
        "Bank Passbook",
        "Affidavit",
      ],
    },
    "FARMER REGISTRATION": {
      price: "₹30",
      days: "Maximum 1 day",
      documents: [
        "Photo",
        "Aadhar Card",
        "Bank Passbook",
        "Proof of Farming Location",
      ],
    },
    "O.B.C CERTIFICATE": {
      price: "₹300",
      days: "Minimum 3 days",
      documents: [
        "Self Attested Photograph",
        "Aadhar / Voter ID / PAN / Ration Card",
      ],
    },
    "EWS": {
      price: "₹1000",
      days: "Maximum 3 days",
      documents: [
        "Self Attested Photograph",
        "Aadhar Card",
        "Affidavit",
        "Caste, Residence & Income Certificate",
      ],
    },
    "CASTE CERTIFICATE ONLINE": {
      price: "₹50",
      days: "Maximum 1 day",
      documents: [
        "Self Attested Photograph",
        "Aadhar / Voter ID / PAN / Ration Card",
      ],
    },
    
    "INCOME CERTIFICATE ONLINE": {
      price: "₹50",
      days: "Maximum 1 day",
      documents: [
        "Self Attested Photograph",
        "Aadhar / Voter ID / PAN / Ration Card",
      ],
    },
    "RESIDENTIAL CERTIFICATE ONLINE": {
      price: "₹50",
      days: "Maximum 1 day",
      documents: [
        "Self Attested Photograph",
        "Aadhar / Voter ID / PAN / Ration Card",
      ],
    },
    "SMALL INDUSTRIES LICENSE (M.S.M.E)": {
      price: "₹150",
      days: "Maximum 1 day",
      documents: [
        "Aadhar Card",
        "PAN Card",
        "Bank Passbook",
        "Business Details",
      ],
    },
    "VANSHWLI PARMAN PATRA": {
      price: "₹1650",
      days: "Minimum 10 days",
      documents: [
        "Affidavit",
        "Aadhar Cards of All Members",
        "Application Form (आवेदन)",
      ],
    },
    "ONLINE CORRECTION OF LAND": {
      price: "₹70",
      days: "Minimum 1 day",
      documents: [
        "Offline / Online Rent Receipt",
        "Proof of Correction Details",
      ],
    },
    "ONLINE MUTATION APPLY": {
      price: "₹100",
      days: "Minimum 1 day",
      documents: ["Aadhar Cards of All Members", "Relevant Documents"],
    },

    // 👉 Add more subcategories as needed...
  };

  const categories = [
    "DhanGanga online public kendra",
    "DhanGanga Association",
    "DhanGanga physical Treatment Home",
    "DhanGanga Store",
    "DhanGanga real Estate",
    "DhanGanga Hire Service",
    "Dhanganga Hire Vehicle",
    "Naye Soch Naye Kadam",
    "Netralay",
    "Dhangana Mystics Healing",
  ];

  const subCategories = {
    "DhanGanga online public kendra": [
      "PAN CARD",
      "NEW G.S.T",
      "G.S.T FILLING",
      "MARRIAGE CERTIFICATE",
      "ELECTRICITY BILL",
      "BIRTH CERTIFICATE",
      "GOVT RENT RECEIPT",
      "DRIVING LICENSE",
      "KOVID-19 CORONA VACCINE CERTIFICATE",
      "FOOD LICENSE",
      "TRADE LICENSE",
      "DEATH CERTIFICATE",
      "F.I.R. of any police station",
      "I. T. R. Filing",
      "L. P. C.",
      "AADHAR CARD DOWNLOADING VIA O.T.P",
      "VOTER LIST NAME ADDING",
      "RATIONCARD APPLY",
      "FARMER REGISTRATION",
      "O.B.C CERTIFICATE",
      "EWS",
      "CASTE CERTIFICATE ONLINE",
      "INCOME CERTIFICATE ONLINE",
      "RESIDENTIAL CERTIFICATE ONLINE",
      "SMALL INDUSTRIES LICENSE (M.S.M.E)",
      "VANSHWLI PARMAN PATRA",
      "ONLINE CORRECTION OF LAND",
      "ONLINE MUTATION APPLY",
    ],
    "DhanGanga Association": [
      "CRIMINAL",
      "CIVIL",
      "FAMILY MATTER",
      "BHAGALPUR CIVIL COURT ALL WORK",
      "Miscellaneous (विविध)",
      "Service Matter"
    ],
    "DhanGanga physical Treatment Home": [
      "Allopathy",
      "Homeopathy",
      "Electro Homeopathy",
      "Ayurveda",
      "Acupressure",
      "Rekki",
      "Astrology",
      "Tantra- Mantra"
    ],
    "DhanGanga Store": [
      "BUILDING MATERIAL (मकान निर्माण सामग्री)", 
      "READYMADE CLOTH (रेडीमेड कपड़ा )", 
      "COMPUETR & CCTV",
      "GROCERY (किराना )",
      "SOMEWHAT DIFFERENT (जरा हट के!)"
    ],
    "DhanGanga real Estate": [
      "SALE",
      "PURCHASE",
      "RENT",
      "LEASE",
      "INVESTEMENT"
    ],
    "DhanGanga Hire Service": [
      "RAJ MISTRI (राज मिस्त्री)",
      "PLUMBER MISTRY (प्लम्बर मिस्त्री)",
      "CARPENTER (बढ़ई मिस्त्री)",
      "GRILL MISTRY (ग्रिल मिस्त्री)",
      "RANG PAINT MISTRI (रंग-पेंट मिस्त्री)",
      "PIELING MISTRY (पाइलिंग मिस्त्री)"
    ],
    "Dhanganga Hire Vehicle": [
      "INSIDE YOUR DISTRICT",
      "INSIDE YOUR STATE",
      "INSIDE YOUR COUNTRY",
    ],
    "Naye Soch Naye Kadam": [
      "JOINING NEW MEMBER",
      "LOGIN OLD MEMBER",
      "INTRODUCTION",
      "TERM AND CONDITION",
      "HOW TO JOIN AND WHAT ARE THE BENEFITS",
      "FOUNDER DETAILS"
    ],
    "Netralay": [
      "REGISTRATION FOR TREATMENT AT LAHAN HOSPITAL",
      "REGISTRATION OF NETRAYALAY BHAGALPUR",
    ],
    "Dhangana Mystics Healing": [
      "HEALING/ TREATMENT",
      "TRAINING",
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory && selectedSubCategory) {
      const details = serviceData[selectedSubCategory] || {
        price: "N/A",
        days: "N/A",
        documents: [],
      };

      // ✅ Pass data via navigate state
      navigate("/service-details", {
        state: {
          category: selectedCategory,
          subCategory: selectedSubCategory,
          ...details,
        },
      });
    }
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Dropdown */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubCategory("");
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" /> */}
        </div>

        {/* Sub Category Dropdown */}
        <div className="relative">
          <select
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
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
          {/* <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" /> */}
        </div>

        {/* Get Start Button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Get Start
        </button>
      </form>
    </div>
  );
};

export default BookingModal;
