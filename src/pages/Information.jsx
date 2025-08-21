import React from "react";

const Information = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Text content */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                We run all kinds of services that vow your{" "}
                <span className="text-blue-600">success</span>
              </h1>
            </div>

            {/* Right side - Buttons */}
            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              {/* Gradient Primary Button */}
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Let's talk
              </button>

              {/* Outline Secondary Button */}
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Get info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Happy Clients */}
            <div className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-2">1200</h3>
              <p className="text-sm md:text-base font-medium tracking-wider uppercase">
                Happy Clients
              </p>
            </div>

            {/* Work */}
            <div className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-2">320</h3>
              <p className="text-sm md:text-base font-medium tracking-wider uppercase">
                Work
              </p>
            </div>

            {/* Skilled Experts */}
            <div className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-2">78</h3>
              <p className="text-sm md:text-base font-medium tracking-wider uppercase">
                Skilled Experts
              </p>
            </div>

            {/* Media Posts */}
            <div className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-2">318</h3>
              <p className="text-sm md:text-base font-medium tracking-wider uppercase">
                Media Posts
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
