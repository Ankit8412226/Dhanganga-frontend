// news.jsx
import React from "react";
import { Calendar } from "lucide-react";

const newsData = [
  {
    id: 1,
    date: "2015-03-12",
    title: "Photo of the beginning of the Naye soch Naya kadam",
    description: "Photo of the beginning of the Naye soch Naya kadam.",
    image: "news.jpg",
  },
  {
    id: 2,
    date: "2015-03-12",
    title: "Photo of the beginning of the Naye soch Naya kadam",
    description: "Photo of the beginning of the Naye soch Naya kadam.",
    image: "news.jpg",
  },
  {
    id: 3,
    date: "2015-03-12",
    title: "Photo of the beginning of the Naye soch Naya kadam",
    description: "Photo of the beginning of the Naye soch Naya kadam.",
    image: "news.jpg",
  },
  {
    id: 4,
    date: "2015-03-12",
    title: "Photo of the beginning of the Naye soch Naya kadam",
    description: "Photo of the beginning of the Naye soch Naya kadam.",
    image: "news.jpg",
  },
];

export default function News() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 sm:pt-36 lg:pt-40">
      {/* Header */}
      <div className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">News/Event</h1>
      </div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              {/* Date */}
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {news.date}
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800">
                {news.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-800 mb-2 text-center py-10 text-white">
        <h2 className="text-2xl font-bold">
          Assess your business potentials and find opportunities{" "}
          <span className="text-orange-400">for bigger success</span>
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-200">
            Let's talk
          </button>
          <button className="bg-orange-400 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-500">
            Get info
          </button>
        </div>
      </div>
    </div>
  );
}
