// src/pages/MainAppoinment.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchServices, fetchSubServices } from "../api/services";

const MainAppoinment = () => {
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
    EWS: {
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

  // Dynamic services and subservices from backend
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [_, setLoading] = useState(true);
  const [__, setError] = useState("");

  // Categories from backend services
  const categories = useMemo(
    () => services.map((s) => s.serviceName),
    [services]
  );

  // Filter sub-services by selected service
  const dynamicSubCategories = useMemo(() => {
    const selectedService = services.find(
      (s) => s.serviceName === selectedCategory
    );
    if (!selectedService) return [];
    return subServices
      .filter((ss) => {
        const ssServiceId = typeof ss.service === "object" && ss.service?._id ? ss.service._id : ss.service;
        return String(ssServiceId) === String(selectedService._id);
      })
      .map((ss) => ({
        id: ss._id,
        label: ss.subServiceName || ss.details || ss._id,
        fee: ss.fee,
        time: ss.time,
        doc: ss.doc,
      }));
  }, [services, subServices, selectedCategory]);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const [svcRes, subSvcRes] = await Promise.all([
          fetchServices(),
          fetchSubServices(),
        ]);
        if (!isMounted) return;
        const svc = Array.isArray(svcRes.data)
          ? svcRes.data
          : svcRes.data?.services || svcRes.data?.data || [];
        const subsvc = Array.isArray(subSvcRes.data)
          ? subSvcRes.data
          : subSvcRes.data?.subservices || subSvcRes.data?.data || [];
        setServices(svc);
        setSubServices(subsvc);
      } catch (err) {
        setError(err?.response?.data?.message || "Failed to load services");
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory && selectedSubCategory) {
      const selectedService = services.find(
        (s) => s.serviceName === selectedCategory
      );
      const selected = dynamicSubCategories.find(
        (s) => s.id === selectedSubCategory
      );
      const details = selected
        ? {
            price: selected.fee,
            days: selected.time,
            documents: selected.doc ? [selected.doc] : [],
          }
        : serviceData[selectedSubCategory] || {
            price: "N/A",
            days: "N/A",
            documents: [],
          };

      if (selectedService?._id) {
        navigate(`/service-details/${selectedService._id}`, {
          state: {
            category: selectedCategory,
            subCategory:
              selected?.label || selectedSubCategory,
            ...details,
          },
        });
      } else {
        navigate("/services");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
              {selectedCategory && dynamicSubCategories.length > 0
                ? dynamicSubCategories.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.label}
                    </option>
                  ))
                : null}
            </select>
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
    </div>
  );
};

export default MainAppoinment;
