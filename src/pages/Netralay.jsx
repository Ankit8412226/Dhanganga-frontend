import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const NetralayPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative grid md:grid-cols-2 gap-12 h-[950px] px-10 py-20 items-center bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="space-y-6">
          <p className="text-blue-600 font-semibold tracking-widest uppercase animate-pulse">
            Netralay
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-snug">
            Netralay <br />
            <span className="text-blue-700">20+ Years</span> of Trusted
            <span className="text-purple-600"> Care</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Your reliable partner for <strong>eye & ear care</strong> services
            across the Indo-Nepal region.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
              Talk to a Consultant
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105">
              Contact Us Now
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="flex gap-6 justify-center">
          <img
            src="/image1.jpeg"
            alt="Doctor working"
            className="rounded-2xl shadow-2xl w-72 transform hover:scale-105 transition duration-500"
          />
          <div className="flex flex-col justify-between gap-6">
            <img
              src="/image2.jpeg"
              alt="Doctor treating patient"
              className="rounded-xl shadow-xl w-56 hover:scale-105 transition duration-500"
            />
            <img
              src="/image3.jpeg"
              alt="Treatment"
              className="rounded-xl shadow-xl w-56 hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="flex justify-center px-8 py-16">
        <img
          src="description.jpg"
          alt="Notice"
          className="rounded-2xl shadow-lg max-w-4xl hover:scale-105 transition duration-500"
        />
      </section>

      {/* Services Section */}
      <section className="px-8 py-20 text-center bg-white">
        <h2 className="text-blue-500 uppercase tracking-widest font-semibold">
          Services
        </h2>
        <h3 className="text-4xl font-bold mb-14">
          We provide <span className="text-blue-700">Various Services.</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Lahan Best Ophthalmologists",
              desc: "We provide the best responsive and functional treatment design for patients.",
            },
            {
              title: "Lahan Treatment Facility",
              desc: "Access advanced treatment facilities in collaboration with trusted doctors.",
            },
            {
              title: "Vabishnidhi of Uaphar System",
              desc: "A transparent and supportive system to assist patients during treatment.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <h4 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h4>
              <p className="text-gray-600 mt-3">{service.desc}</p>
              <a
                href="#"
                className="text-blue-600 mt-4 inline-block font-medium hover:text-blue-800"
              >
                Book Service Now →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100">
        <h2 className="text-blue-500 uppercase tracking-widest font-semibold">
          How We Work
        </h2>
        <h3 className="text-4xl font-bold mb-14">
          How it helps <span className="text-blue-700">you</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-500">
            <h4 className="text-2xl font-semibold text-blue-700">
              01. Discussion
            </h4>
            <p className="text-gray-600 mt-3">
              Call and report your problem and book your appointment on the
              phone.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-500">
            <h4 className="text-2xl font-semibold text-blue-700">
              02. Concepts & Initiatives
            </h4>
            <p className="text-gray-600 mt-3">
              Another easy way is that you can book your appointment through our
              website.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      {/* Book Appointment Section */}
      {/* Book Appointment Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-300 via-white to-purple-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-gray-400 uppercase tracking-wider">
              Appointment
            </h2>
            <h3 className="text-4xl font-bold mb-6">
              Book Your <span className="text-blue-600">Appointment</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Schedule your consultation with our expert doctors today. Get
              personalized care and treatment at the best facility in the
              region.
            </p>

            {/* Appointment Image */}
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                alt="Appointment illustration"
                className="rounded-2xl shadow-xl w-full max-w-md"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            </div>
          </div>

          {/* Right - Appointment Form */}
          <div className="bg-white shadow-xl rounded-2xl p-10 border hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-500">
            <form className="space-y-6">
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:scale-105 transition-all"
              >
                Book Appointment →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetralayPage;
