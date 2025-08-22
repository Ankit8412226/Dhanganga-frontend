import {
  Award,
  Calendar,
  ChevronRight,
  Heart,
  Play,
  Shield,
  Star,
  Users
} from "lucide-react";
import { useState } from "react";
import BookingModal from "./AppointmentForm";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Patients", color: "text-blue-400" },
    { icon: Award, number: "15+", label: "Years Experience", color: "text-emerald-400" },
    { icon: Calendar, number: "500+", label: "Monthly Appointments", color: "text-purple-400" },
  ];

  const features = [
    { icon: Star, text: "Expert Medical Team" },
    { icon: Heart, text: "Compassionate Care" },
    { icon: Shield, text: "Safe & Secure" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-4">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <img
            src="https://nayesochnayakadam.com/assets/images/hero/home-appointment-hero-bg-image.webp"
            alt="Healthcare background"
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 bg-blue-300/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-8 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-8 sm:py-12">
          {/* Left Side - Hero Content */}
          <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium animate-fade-in-up">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Trusted Healthcare Provider
            </div>

            {/* Main heading with enhanced typography */}
            <div className="space-y-3 sm:space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                  Naye Soch
                </span>
                <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent drop-shadow-lg">
                  Naya Kadam
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-200 mt-2 drop-shadow-md">
                  Excellent Services
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up drop-shadow-sm" style={{ animationDelay: '0.4s' }}>
              Experience world-class healthcare with our expert medical
              professionals. Your health is our priority, your care is our
              commitment.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <feature.icon className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:space-x-3 group text-center sm:text-left">
                  <div className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300 hover-lift mb-2 sm:mb-0`}>
                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white drop-shadow-sm">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons for larger screens - ENHANCED VISIBILITY */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              {/* Primary Button - Bright and highly visible */}
              <button
                onClick={() => {
                  const bookingSection = document.getElementById('booking-section');
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-400 border-2 border-blue-400/50 hover:border-blue-300"
              >
                {/* Animated background shine effect */}
                <div className="absolute inset-0  bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Book Appointment Now
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              {/* Secondary Button - White with dark text for contrast */}
              <button className="group relative overflow-hidden bg-white text-slate-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-black/20 hover:shadow-black/30 hover:scale-105 transition-all duration-400 border-2 border-white/80 hover:border-white hover:bg-gray-50">
                <div className="absolute cursor-pointer inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Our Story
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0" id="booking-section">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative elements around form */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-emerald-400/30 rounded-full blur-sm"></div>
              <div className="absolute top-1/4 -right-2 w-6 h-6 bg-purple-400/20 rounded-full blur-sm"></div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <BookingModal />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA Buttons - ENHANCED VISIBILITY */}
        <div className="sm:hidden flex flex-col gap-4 pb-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {/* Primary Mobile Button */}
          <button
            onClick={() => {
              const bookingSection = document.getElementById('booking-section');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all duration-400 border-2 border-blue-400/60 hover:border-blue-300 w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            <div className="relative flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Book Appointment Now
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>

          {/* Secondary Mobile Button */}
          <button className="group relative overflow-hidden bg-white text-slate-700 px-6 py-4 text-lg font-bold rounded-2xl shadow-2xl shadow-black/20 hover:shadow-black/30 hover:scale-105 transition-all duration-400 border-2 border-white/90 hover:border-white hover:bg-gray-50 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            <div className="relative flex items-center justify-center gap-3">
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Watch Our Story
            </div>
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32   z-20"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
