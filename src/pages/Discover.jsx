import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

// ServiceCard Component
const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="relative group bg-white/60 backdrop-blur-lg rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

      {/* Icon */}
      <div className="flex justify-center mb-6 relative z-10">
        <div className="text-5xl transform group-hover:scale-125 transition-transform duration-500">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center leading-tight relative z-10 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center relative z-10">
        {description}
      </p>

      {/* Discover Now Link */}
      <div className="text-center relative z-10">
        <a
          href={link}
          className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300"
        >
          Discover now →
        </a>
      </div>
    </div>
  );
};

const Discover = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const services = [
    {
      id: 1,
      title: "Dhanganga Online Public Kendra",
      description: "Responsive and functional IT design worldwide.",
      icon: "💻",
      link: "#",
    },
    {
      id: 2,
      title: "Dhanganga Associate",
      description: "Delivering professional IT services and solutions.",
      icon: "⚖️",
      link: "#",
    },
    {
      id: 3,
      title: "Dhanganga Physical Treatment Home",
      description: "Modern approach to physical wellness & care.",
      icon: "🏥",
      link: "#",
    },
    {
      id: 4,
      title: "Dhanganga Store",
      description: "Your trusted source for products & services.",
      icon: "🏪",
      link: "#",
    },
    {
      id: 5,
      title: "Dhanganga Real Estate",
      description: "Helping you find your dream properties.",
      icon: "🏢",
      link: "#",
    },
    {
      id: 6,
      title: "Dhanganga Hire Services",
      description: "Providing on-demand professional services.",
      icon: "🔧",
      link: "#",
    },
    {
      id: 7,
      title: "Dhanganga Hire Vehicle",
      description: "Vehicle rental solutions for all your needs.",
      icon: "🚗",
      link: "#",
    },
    {
      id: 8,
      title: "Naye Soch Naya Kadam",
      description: "Innovative solutions for a brighter tomorrow.",
      icon: "💡",
      link: "#",
    },
    {
      id: 9,
      title: "Netralay",
      description: "Eye care and vision wellness at its best.",
      icon: "👁️",
      link: "#",
    },
    {
      id: 10,
      title: "Dhanganga Mystics Healing",
      description: "Spiritual & holistic healing practices.",
      icon: "✨",
      link: "#",
    },
  ];

  const serviceNames = services.map((s) => s.title);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Discover Our Company
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
            We’ve been thriving in{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              7 years
            </span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-6 mb-14">
          {["mission", "services"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-3 text-lg font-semibold rounded-full border-2 transition-all duration-500 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg"
                  : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {tab === "mission" ? "Our Mission" : "Our Services"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[500px]">
          {activeTab === "mission" ? (
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 text-lg mb-4">
                We are <span className="text-blue-600 font-semibold">24×7</span>{" "}
                available!
              </p>
              <p className="text-gray-600 mb-10">
                Reach out for a detailed analysis and tailored assessment of
                your plan.
              </p>

              {/* Service Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
                {serviceNames.map((service, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-500"
              >
                Let’s Get Started →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Discover;
