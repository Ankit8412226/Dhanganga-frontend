import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Experts from "./Expert.jsx";
import LeaderCard from "../components/LeaderCard.jsx";
import InformationCard from "../components/InformationCard.jsx";

const NetralayPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
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
      {/* Appointment Section */}
      {/* Appointment Section */}
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
              Reach out to the Indo-Nepal's most reliable Ophthalmologists and
              ENT services. Fill in the form to confirm your visit today.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <span className="text-blue-600 text-2xl">📞</span>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Call For Advice Now!
                  </p>
                  <p className="text-xl font-semibold text-blue-700">
                    (+91) 9955299280
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-purple-600 text-2xl">📧</span>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    Say Hello
                  </p>
                  <p className="text-xl font-semibold text-purple-700">
                    netralaybgp@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Appointment Image */}
            <div className="relative -mt-6">
              {" "}
              {/* moved slightly up with -mt-6 */}
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
              {/* Reference Code */}
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Reference Code
                </label>
                <input
                  type="text"
                  placeholder="Enter Reference Code"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Patient's Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter patient's name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Gender *
                </label>
                <div className="flex gap-6">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-2"
                    />{" "}
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="mr-2"
                    />{" "}
                    Female
                  </label>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  required
                  placeholder="Enter age"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Guardian Name */}
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter guardian name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <div className="flex gap-6 mt-2">
                  <label>
                    <input
                      type="radio"
                      name="guardianType"
                      value="Father"
                      className="mr-2"
                    />{" "}
                    Father’s Name
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="guardianType"
                      value="Husband"
                      className="mr-2"
                    />{" "}
                    Husband’s Name
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="guardianType"
                      value="Son"
                      className="mr-2"
                    />{" "}
                    Son’s Name
                  </label>
                </div>
              </div>

              {/* Attendant Name & Mobile */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-gray-700 mb-2">
                    Attendant Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter attendant name"
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-left text-gray-700 mb-2">
                    Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Full Address */}
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Full Address *
                </label>
                <textarea
                  required
                  placeholder="Enter full address"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Purpose of Visit */}
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Purpose of Visit *
                </label>
                <div className="space-y-2">
                  <label>
                    <input
                      type="radio"
                      name="purpose"
                      value="EyeCheckup"
                      className="mr-2"
                    />{" "}
                    केवल आँख जाँच (Eye Checkup)
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="purpose"
                      value="EarCheckup"
                      className="mr-2"
                    />{" "}
                    केवल कान जाँच (Ear Checkup)
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="purpose"
                      value="EyeEarCheckup"
                      className="mr-2"
                    />{" "}
                    आँख और कान जाँच (Eye + Ear Checkup)
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="purpose"
                      value="Cataract"
                      className="mr-2"
                    />{" "}
                    मोतियाबिंद ऑपरेशन (Cataract Surgery)
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-left text-gray-700 mb-2">
                  Other Notes
                </label>
                <input
                  type="text"
                  placeholder="अत्र बातों का उल्लेख करें"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Submit Button */}
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
