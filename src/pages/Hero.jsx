import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Award,
  ChevronRight,
  Play,
} from "lucide-react";
import BookingModal from "./AppointmentForm";

// Mock BookingModal component for demonstration
// const BookingModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="w-full max-w-md">
//       <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
//         <div className="text-center mb-6">
//           <h3 className="text-2xl font-bold text-gray-800 mb-2">
//             Book Your Appointment
//           </h3>
//           <p className="text-gray-600">Get expert care today</p>
//         </div>

//         <form className="space-y-4">
//           <div>
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
//             />
//           </div>

//           <div>
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
//             />
//           </div>

//           <div>
//             <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80">
//               <option>Select Service</option>
//               <option>Eye Check-up</option>
//               <option>Consultation</option>
//               <option>Surgery</option>
//             </select>
//           </div>

//           <div>
//             <input
//               type="date"
//               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Book Appointment
//           </button>
//         </form>

//         <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
//           <Clock className="w-4 h-4 mr-2" />
//           Available 24/7
//         </div>
//       </div>
//     </div>
//   );
// };

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Patients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Calendar, number: "500+", label: "Monthly Appointments" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <img
            src="https://nayesochnayakadam.com/assets/images/hero/home-appointment-hero-bg-image.webp"
            alt="Healthcare background"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-blue-300/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-12">
          {/* Left Side - Hero Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            {/* <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Trusted Healthcare Provider
            </div> */}

            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Naye Soch
                </span>
                <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  Naya Kadam
                </span>
                <span className="block text-3xl lg:text-4xl font-bold text-blue-200 mt-2">
                  Excellent Services
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Experience world-class healthcare with our expert medical
              professionals. Your health is our priority, your care is our
              commitment.
            </p>

            {/* CTA Buttons */}
            

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements around form */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>

              <BookingModal />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
