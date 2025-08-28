import { ArrowRight, CheckCircle, Sparkles, Target, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// Service Card with Framer Motion
const ServiceCard = ({ title, description, icon, link, index }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      animate="visible"
      className="relative group glass-card p-6 hover-lift cursor-pointer overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* Floating particles */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse delay-300"></div>

      {/* Icon */}
      <div className="flex justify-center mb-6 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg"
        >
          <div className="text-3xl">{icon}</div>
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-800 mb-3 text-center leading-tight relative z-10 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6 text-center relative z-10 group-hover:text-slate-700 transition-colors duration-300">
        {description}
      </p>

      {/* CTA */}
      <div className="text-center relative z-10">
        <a
          href={link}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-all duration-300 group-hover:gap-3"
        >
          Discover now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-300"></div>
    </motion.div>
  );
};

const Discover = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("mission");

  const services = [
    {
      id: 1,
      title: "Dhanganga Online Public Kendra",
      description:
        "Responsive and functional IT design worldwide with cutting-edge solutions.",
      icon: "💻",
      link: "/discover-Public-Kendra",
    },
    {
      id: 2,
      title: "Dhanganga Associate",
      description:
        "Delivering professional IT services and innovative business solutions.",
      icon: "⚖️",
      link: "/discover-Association",
    },
    {
      id: 3,
      title: "Dhanganga Physical Treatment Home",
      description:
        "Modern approach to physical wellness, rehabilitation & comprehensive care.",
      icon: "🏥",
      link: "/discover-Physical",
    },
    {
      id: 4,
      title: "Dhanganga Store",
      description:
        "Your trusted marketplace for quality products and reliable services.",
      icon: "🏪",
      link: "/discover-Store",
    },
    {
      id: 5,
      title: "Dhanganga Real Estate",
      description:
        "Helping you find your dream properties and investment opportunities.",
      icon: "🏢",
      link: "/discover-RealEstate",
    },
    {
      id: 6,
      title: "Dhanganga Hire Services",
      description:
        "Professional on-demand services tailored to your specific needs.",
      icon: "🔧",
      link: "/discover-Hire",
    },
    {
      id: 7,
      title: "Dhanganga Hire Vehicle",
      description:
        "Reliable vehicle rental solutions for all transportation needs.",
      icon: "🚗",
      link: "/discover-Vehicle",
    },
    {
      id: 8,
      title: "Naye Soch Naya Kadam",
      description:
        "Innovative healthcare solutions for a healthier, brighter tomorrow.",
      icon: "💡",
      link: "/discover-NayeSoch",
    },
    {
      id: 9,
      title: "Netralay",
      description:
        "Comprehensive eye care and advanced vision wellness services.",
      icon: "👁️",
      link: "/discover-Netralay",
    },
    {
      id: 10,
      title: "Dhanganga Mystics Healing",
      description:
        "Spiritual wellness and holistic healing practices for mind-body harmony.",
      icon: "✨",
      link: "/discover-Healing",
    },
  ];

  const achievements = [
    { number: "10,000+", label: "Happy Clients", icon: Users },
    { number: "7+", label: "Years Experience", icon: Target },
    { number: "10+", label: "Services Offered", icon: Sparkles },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20 px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-2 text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
          <Sparkles className="w-4 h-4" />
          Discover Our Company
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
          We've been thriving for{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent bg-clip-text">
            7 years
          </span>
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Delivering excellence across multiple domains with innovation,
          dedication, and unwavering commitment to quality.
        </p>
      </motion.div>

      {/* Achievements */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i}
            className="glass-card px-8 py-6 text-center hover-lift group"
          >
            <a.icon className="w-8 h-8 text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-slate-800 mb-1">
              {a.number}
            </div>
            <div className="text-sm text-slate-600 font-medium">{a.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="flex justify-center gap-4 mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
      >
        {["mission", "services"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-8 cursor-pointer py-4 text-lg font-bold rounded-2xl transition-all ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl"
                : "glass-card text-slate-700 hover:bg-blue-50"
            }`}
          >
            {tab === "mission" ? (
              <>
                <Target className="w-5 h-5 inline-block mr-2" /> Our Mission
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 inline-block mr-2" /> Our Services
              </>
            )}
          </button>
        ))}
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "mission" ? (
          <motion.div
            key="mission"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card p-8 md:p-12 mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                Available 24×7
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Committed to Excellence in Every Service
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We provide comprehensive solutions across multiple domains with
                unwavering dedication. Reach out for detailed analysis and
                tailored assessments of your specific requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10">
                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors duration-300 group"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </span>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={() => navigate("/appoinment")}
                className="btn-primary text-lg px-10 py-4 hover-lift group"
              >
                <span className="flex items-center gap-3">
                  Let's Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="services"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {services.map((s, i) => (
              <ServiceCard key={s.id} {...s} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Discover;
