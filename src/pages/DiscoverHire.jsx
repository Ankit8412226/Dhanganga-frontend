import React from 'react'
import AssociateCard from '../components/AssociateCard';

const DiscoverHire = () => {
  const services = [
    {
      title: "RAJ MISTRI (राज मिस्त्री)",
    },
    {
      title: "PLUMBER MISTRY (प्लम्बर मिस्त्री)",
    },
    {
      title: "CARPENTER (बढ़ई मिस्त्री)",
    },
    {
      title: "GRILL MISTRY (ग्रिल मिस्त्री)",
    },
    {
      title: "RANG PAINT MISTRI (रंग-पेंट मिस्त्री)",
    },
    {
      title: "PIELING MISTRY (पाइलिंग मिस्त्री)",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-3 mt-6">
            NAYE SOCH NAYA KADAM
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Dhanganga Association{" "}
            <span className="text-blue-600">All Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Fast • Reliable • Affordable — Government & Public Documentation at
            your fingertips.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <AssociateCard
              key={index}
              title={service.title}
              buttonClass="w-full py-2 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:opacity-90 transition"
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-10 md:p-16 text-white relative overflow-hidden">
          {/* Floating dots bg */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-20 gap-1 h-full">
              {[...Array(400)].map((_, i) => (
                <div key={i} className="bg-white rounded-full w-1 h-1"></div>
              ))}
            </div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl mb-8 opacity-90 font-light">
                Trusted by <span className="font-bold">700+ customers</span> for{" "}
                <span className="font-bold">3200+ services</span>
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 border-2 border-white rounded-2xl flex items-center justify-center mr-4 bg-white/10 backdrop-blur">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 uppercase tracking-wider">
                      Call for advice now
                    </p>
                    <p className="text-2xl font-bold">(+91) 7279078783</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-14 h-14 border-2 border-white rounded-2xl flex items-center justify-center mr-4 bg-white/10 backdrop-blur">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 uppercase tracking-wider">
                      Say Hello
                    </p>
                    <p className="text-xl font-semibold">
                      manturani.pp@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-gray-800">
              <h3 className="text-3xl font-extrabold mb-3 text-gray-900">
                Need a hand?
              </h3>
              <p className="text-gray-600 mb-8">
                Our team is ready to assist with all services. Fill the form and
                we’ll get back quickly.
              </p>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your mobile"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Department
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Choose a department</option>
                    <option value="pan">PAN Card Services</option>
                    <option value="gst">GST Services</option>
                    <option value="certificates">Certificate Services</option>
                    <option value="licenses">License Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Please describe what you need.
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your requirements..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
                  onClick={() => console.log("Form submitted")}
                >
                  Book Service 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscoverHire