// src/pages/ServiceDetails.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, FileText, Clock, Tag } from "lucide-react";
import {
  fetchServiceById,
} from "../api/services";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [service, setService] = useState(null);
  const [subServices, setSubServices] = useState([]);
  const [types, setTypes] = useState([]);
  const [associates, setAssociates] = useState([]);

  const [selectedSubService, setSelectedSubService] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAssociate, setSelectedAssociate] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const { data } = await fetchServiceById(id);
        const payload = data?.data || data;
        if (!payload) throw new Error("Invalid response");
        const { service, subServices, types, associates } = payload;
        if (isMounted) {
          setService(service);
          setSubServices(subServices || []);
          setTypes(types || []);
          setAssociates(associates || []);
          // Default select first subservice if exists
          setSelectedSubService((subServices || [])[0] || null);
          setSelectedType(null);
          setSelectedAssociate(null);
        }
      } catch (err) {
        if (isMounted) setError(err?.response?.data?.message || err.message || "Failed to load service");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    if (id) load();
    return () => {
      isMounted = false;
    };
  }, [id]);

  const filteredTypes = useMemo(() => {
    if (!selectedSubService) return [];
    return (types || []).filter((t) => t.subService?._id === selectedSubService?._id);
  }, [types, selectedSubService]);

  const filteredAssociates = useMemo(() => {
    if (!selectedSubService) return [];
    return (associates || []).filter((a) => {
      const matchSub = a.subService?._id === selectedSubService?._id;
      const matchType = selectedType ? a.type?._id === selectedType?._id : true;
      return matchSub && matchType;
    });
  }, [associates, selectedSubService, selectedType]);

  const computedPrice = useMemo(() => {
    if (selectedAssociate?.amount) return selectedAssociate.amount;
    if (selectedType?.amount) return selectedType.amount;
    return selectedSubService?.fee ?? "N/A";
  }, [selectedAssociate, selectedType, selectedSubService]);

  const computedTime = useMemo(() => {
    if (selectedAssociate?.time) return selectedAssociate.time;
    if (selectedType?.time) return selectedType.time;
    return selectedSubService?.time ?? "N/A";
  }, [selectedAssociate, selectedType, selectedSubService]);

  const computedDocuments = useMemo(() => {
    const docs = selectedType?.documents || selectedAssociate?.documents;
    if (Array.isArray(docs) && docs.length) return docs;
    // Fallback: some seed data uses `doc` on subService
    const raw = selectedSubService?.doc || selectedSubService?.documents;
    if (Array.isArray(raw)) return raw;
    if (typeof raw === "string" && raw.length) return raw.split(",").map((d) => d.trim()).filter(Boolean);
    return [];
  }, [selectedType, selectedAssociate, selectedSubService]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="text-gray-700">Loading service details...</div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <p className="text-lg text-red-600 mb-4">{error || "Service not found"}</p>
        <button
          onClick={() => navigate("/MainService")}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md hover:scale-105 transition-transform"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-6 bg-gradient-to-br from-blue-50 via-white to-purple-100 flex justify-center items-center p-6">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-2xl w-full border border-gray-100 relative">
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
          {service?.serviceName}
        </h1>
        <p className="text-gray-500 text-center mb-8">
          <span className="font-medium text-gray-700">Details:</span> {service?.details}
        </p>

        {/* Selection Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Service</label>
            <select
              value={selectedSubService?._id || ""}
              onChange={(e) => {
                const next = subServices.find((s) => s._id === e.target.value) || null;
                setSelectedSubService(next);
                setSelectedType(null);
                setSelectedAssociate(null);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select a sub-service</option>
              {subServices.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.subServiceName || s.details || s._id}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              value={selectedType?._id || ""}
              onChange={(e) => {
                const next = filteredTypes.find((t) => t._id === e.target.value) || null;
                setSelectedType(next);
                setSelectedAssociate(null);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              disabled={!selectedSubService}
            >
              <option value="">Select a type</option>
              {filteredTypes.map((t) => (
                <option key={t._id} value={t._id}>
                  {t.type || t.associateName || t._id}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Associate</label>
            <select
              value={selectedAssociate?._id || ""}
              onChange={(e) => {
                const next = filteredAssociates.find((a) => a._id === e.target.value) || null;
                setSelectedAssociate(next);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              disabled={!selectedSubService}
            >
              <option value="">Select an associate (optional)</option>
              {filteredAssociates.map((a) => (
                <option key={a._id} value={a._id}>
                  {a.name || a.associateName || a._id}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Summary Card */}
        <div className="border rounded-2xl p-8 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 text-center">
          <img
            src="/dhanganga.jpg"
            alt="DhanGanga"
            className="w-24 h-24 mx-auto mb-6 drop-shadow-md"
          />
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <Tag className="text-blue-500 mb-1" size={20} />
              <p className="text-lg font-semibold text-gray-800">{computedPrice}</p>
              <p className="text-xs text-gray-500">Price</p>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="text-purple-500 mb-1" size={20} />
              <p className="text-lg font-semibold text-gray-800">{computedTime}</p>
              <p className="text-xs text-gray-500">Duration</p>
            </div>
          </div>
          <button
            onClick={() =>
              navigate("/appointment-booking", {
                state: {
                  category: service?.serviceName,
                  subCategory: selectedSubService?.subServiceName || "",
                  price: computedPrice,
                  days: computedTime,
                  documents: computedDocuments,
                },
              })
            }
            disabled={!selectedSubService}
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Next
          </button>
          {computedDocuments?.length > 0 && (
            <div className="mt-8 text-left">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <FileText className="text-blue-500" size={18} />
                आवश्यक दस्तावेज
              </h3>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                {computedDocuments.map((doc, index) => (
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
