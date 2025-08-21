import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Experts = () => {
  const experts = [
    {
      id: 1,
      name: "Dr. Pawan Pyara",
      role: "Founder",
      image: "pawan.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
    {
      id: 2,
      name: "Mrs. Khushi Rani",
      role: "Co-Founder",
      image: "khushi.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
    {
      id: 3,
      name: "Dr. Ravi Kumar",
      role: "Co-Founder",
      image: "ravi.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
    {
      id: 4,
      name: "Mr. Prabhakar Bharti",
      role: "Planning Manager",
      image: "prabhakar.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
    {
      id: 5,
      name: "Mr. Aman Kumar",
      role: "Marketing Manager",
      image: "aman.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
    {
      id: 6,
      name: "Mr. Shyam Kishor Das",
      role: "Advocate Of Patna High Court",
      subtitle: "Legal Advisor",
      image: "shyam.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
    {
      id: 7,
      name: "Mrs. Dipa Kumari",
      role: "Marketing Manager",
      image: "deepa.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
    {
      id: 8,
      name: "Miss. Neha Kumari",
      role: "Public Relationship Officer",
      image: "neha.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Experienced
            </span>{" "}
            Experts
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our team of professionals brings passion, expertise, and dedication
            to help you grow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
              Join us now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105">
              View all team →
            </button>
          </div>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              {/* Image with Hover Overlay */}
              <div className="relative group overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Social Media Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a
                      href={expert.social.facebook}
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={expert.social.twitter}
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={expert.social.instagram}
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Expert Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {expert.name}
                </h3>
                <p className="text-blue-600 font-medium">{expert.role}</p>
                {expert.subtitle && (
                  <p className="text-gray-500 text-sm mt-1">
                    {expert.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
