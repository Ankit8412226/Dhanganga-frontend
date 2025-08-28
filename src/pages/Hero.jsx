import {
  Award,
  Calendar,
  ChevronRight,
  Heart,
  Play,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import BookingModal from "./AppointmentForm";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Patients",
      color: "text-blue-400",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "text-emerald-400",
    },
    {
      icon: Calendar,
      number: "500+",
      label: "Monthly Appointments",
      color: "text-purple-400",
    },
  ];

  const features = [
    { icon: Star, text: "Expert Medical Team" },
    { icon: Heart, text: "Compassionate Care" },
    { icon: Shield, text: "Safe & Secure" },
  ];

  // Simple reusable fade-up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://nayesochnayakadam.com/assets/images/hero/home-appointment-hero-bg-image.webp"
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 z-5">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-32 sm:top-40 right-4 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-8 sm:py-12">
          {/* Left content */}
          <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium"
            >
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Trusted Healthcare Provider
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="space-y-3 sm:space-y-4"
            >
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
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Experience world-class healthcare with our expert medical
              professionals. Your health is our priority, your care is our
              commitment.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <feature.icon className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col sm:flex-row items-center sm:space-x-3 group text-center sm:text-left"
                >
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mb-2 sm:mb-0 group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`}
                    />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white drop-shadow-sm">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const bookingSection =
                    document.getElementById("booking-section");
                  if (bookingSection) {
                    bookingSection.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 border-2 border-blue-400/50"
              >
                <div className="relative flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  Book Appointment Now
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-white text-slate-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-black/20 border-2 border-white/80"
              >
                <div className="relative flex items-center justify-center gap-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Our Story
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right booking form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            id="booking-section"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <BookingModal />
            </div>
          </motion.div>
        </div>

        {/* Mobile CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={7}
          className="sm:hidden flex flex-col gap-4 pb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const bookingSection = document.getElementById("booking-section");
              if (bookingSection) {
                bookingSection.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/40 border-2 border-blue-400/60"
          >
            <div className="relative flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5" />
              Book Appointment Now
              <ChevronRight className="w-4 h-4" />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-white text-slate-700 px-6 py-4 text-lg font-bold rounded-2xl shadow-2xl shadow-black/20 border-2 border-white/90"
          >
            <div className="relative flex items-center justify-center gap-3">
              <Play className="w-4 h-4" />
              Watch Our Story
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
