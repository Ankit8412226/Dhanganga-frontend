import {
  ArrowRight,
  Award,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Twitter,
  Users,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Added

const Experts = () => {
  const navigate = useNavigate();
  const experts = [
    {
      id: 1,
      name: "Dr. Pawan Pyara",
      role: "Founder & CEO",
      specialization: "Healthcare Leadership",
      image: "pawan.jpg",
      experience: "15+ Years",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Mrs. Khushi Rani",
      role: "Co-Founder & COO",
      specialization: "Operations Management",
      image: "khushi.jpg",
      experience: "12+ Years",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Dr. Ravi Kumar",
      role: "Co-Founder & CTO",
      specialization: "Medical Technology",
      image: "ravi.jpg",
      experience: "14+ Years",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Mr. Prabhakar Bharti",
      role: "Planning Manager",
      specialization: "Strategic Planning",
      image: "prabhakar.jpg",
      experience: "10+ Years",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Mr. Aman Kumar",
      role: "Marketing Manager",
      specialization: "Digital Marketing",
      image: "aman.jpg",
      experience: "8+ Years",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Mr. Shyam Kishor Das",
      role: "Legal Advisor",
      specialization: "Advocate - Patna High Court",
      image: "shyam.jpg",
      experience: "20+ Years",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 7,
      name: "Mrs. Dipa Kumari",
      role: "Marketing Manager",
      specialization: "Brand Development",
      image: "deepa.jpg",
      experience: "7+ Years",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 8,
      name: "Miss. Neha Kumari",
      role: "Public Relations Officer",
      specialization: "Community Relations",
      image: "neha.jpg",
      experience: "5+ Years",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  const teamStats = [
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      color: "text-blue-500",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Combined",
      color: "text-emerald-500",
    },
    {
      icon: Sparkles,
      number: "100+",
      label: "Projects Completed",
      color: "text-purple-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-emerald-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Users className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700">
              Our Expert Team
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="block">Meet Our</span>
            <span className="block text-gradient">Experienced</span>
            <span className="block">Experts</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
            Our team of passionate professionals brings{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-transparent bg-clip-text font-bold">
              expertise, dedication, and innovation
            </span>{" "}
            to help transform your healthcare experience.
          </p>

          {/* Team Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`p-3 bg-gradient-to-r ${
                      stat.color.includes("blue")
                        ? "from-blue-500 to-blue-600"
                        : stat.color.includes("emerald")
                        ? "from-emerald-500 to-emerald-600"
                        : "from-purple-500 to-purple-600"
                    } rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200/50 border border-slate-200/50 group-hover:border-blue-300/30 relative">
                {/* Image with Hover Overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-white/20">
                    {expert.experience}
                  </div>

                  {/* Social Media Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
                    <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {[
                        {
                          Icon: Facebook,
                          color: "hover:bg-blue-600",
                          link: expert.social.facebook,
                        },
                        {
                          Icon: Twitter,
                          color: "hover:bg-sky-500",
                          link: expert.social.twitter,
                        },
                        {
                          Icon: Instagram,
                          color: "hover:bg-pink-600",
                          link: expert.social.instagram,
                        },
                        {
                          Icon: Linkedin,
                          color: "hover:bg-blue-700",
                          link: expert.social.linkedin,
                        },
                      ].map(({ Icon, color, link }, idx) => (
                        <a
                          key={idx}
                          href={link}
                          className={`bg-white/20 backdrop-blur-sm p-3 rounded-full ${color} hover:text-white transition-all duration-300 hover:scale-110 border border-white/20`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expert Info */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {expert.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">
                    {expert.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {expert.specialization}
                  </p>

                  {/* Contact actions */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex-1 cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-3 rounded-lg text-xs font-medium transition-colors duration-200 flex items-center justify-center gap-1">
                      <Mail className="w-3 h-3" />
                      Email
                    </button>
                    <button className="flex-1 cursor-pointer bg-emerald-50 hover:bg-emerald-100 text-emerald-600 py-2 px-3 rounded-lg text-xs font-medium transition-colors duration-200 flex items-center justify-center gap-1">
                      <Phone className="w-3 h-3" />
                      Call
                    </button>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="glass-card max-w-2xl mx-auto p-8 sm:p-10 border border-slate-200/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals who share our
              passion for excellence and innovation.
            </p>
            <button className="btn-primary flex items-center justify-center gap-3 mx-auto px-8 py-3 hover-lift">
              <Users className="w-5 h-5" />
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experts;
