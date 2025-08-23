import React from "react";
import { motion } from "framer-motion";
import LeaderCard from "../components/LeaderCard";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-32 sm:pt-36 lg:pt-40 px-6 sm:px-12 lg:px-20">
      {/* Section 1 - Hero Text */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-400 uppercase tracking-[0.3em] text-sm mb-6">
          Naye Soch Naya Kadam
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 max-w-5xl mx-auto">
          Share the joy of achieving{" "}
          <span className="text-blue-600">
            glorious moments
          </span>{" "}
          & climbed up{" "}
          <span className="text-blue-600">
            the top
          </span>
          .
        </h2>
      </motion.div>

      {/* Section 2 - Experience Section */}
      <motion.div
        className="max-w-4xl mx-auto mb-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Large 07 Number */}
        <div className="text-center mb-8">
          <h1 className="text-[200px] sm:text-[250px] lg:text-[300px] xl:text-[350px] font-bold text-blue-600 leading-none">
            07
          </h1>
          <p className="text-gray-400 uppercase tracking-[0.25em] text-sm -mt-8">
            Years' Experience
          </p>
        </div>

        {/* Description Text */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl font-medium text-gray-800 leading-relaxed">
            We've been triumphing all these{" "}
            <span className="text-blue-600 font-semibold">07 years</span>. 
            Sacrifices are made up with success.
          </p>
        </div>
      </motion.div>

      {/* Section 3 - Team Introduction */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug max-w-4xl mx-auto">
          We pride ourselves on having a team of{" "}
          <span className="text-blue-600">
            highly-skilled
          </span>{" "}
          experts
        </h3>
      </motion.div>

      {/* Leaders Section */}
      <motion.div
        className="mt-12 pb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <LeaderCard />
      </motion.div>
    </div>
  );
};

export default About;