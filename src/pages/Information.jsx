import {
  Award,
  Briefcase,
  Info,
  MessageCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CountUpNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const startCount = 0;

          const updateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(
              startCount + (end - startCount) * easeOutQuart
            );

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`count-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span id={`count-${end}`} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const Information = () => {
  const navigate = useNavigate();
  const statistics = [
    {
      id: 1,
      number: 1200,
      suffix: "+",
      label: "Happy Clients",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      description: "Satisfied customers worldwide",
    },
    {
      id: 2,
      number: 320,
      suffix: "+",
      label: "Projects Completed",
      icon: Briefcase,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/10",
      description: "Successful deliveries",
    },
    {
      id: 3,
      number: 78,
      suffix: "+",
      label: "Skilled Experts",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      description: "Professional team members",
    },
    {
      id: 4,
      number: 318,
      suffix: "+",
      label: "Media Posts",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      description: "Content shared",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20 px-6 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-20 h-20 bg-emerald-400/5 rounded-full blur-2xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-2 text-blue-600 text-sm font-semibold uppercase tracking-wide mb-6"
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  show: { scale: 1, opacity: 1, transition: { delay: 0.3 } },
                }}
              >
                <Award className="w-4 h-4" />
                Excellence in Service
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                }}
              >
                We run all kinds of services that vow your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent bg-clip-text">
                    success
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { delay: 0.6 } },
                }}
              >
                From healthcare to technology, we deliver comprehensive
                solutions designed to exceed expectations and drive remarkable
                results.
              </motion.p>

              {/* Features */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {["24/7 Support", "Expert Team", "Proven Results"].map(
                  (feature, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      {feature}
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Right side - Buttons */}
            <motion.div
              className="lg:w-1/2 flex flex-col sm:flex-row gap-6 justify-center lg:justify-end"
              variants={{
                hidden: { opacity: 0, x: 40 },
                show: { opacity: 1, x: 0, transition: { delay: 0.8 } },
              }}
            >
              {/* Primary CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="group relative cursor-pointer overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Let's Talk
                </span>
              </motion.button>

              {/* Secondary CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="group relative cursor-pointer overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-blue-200/50 text-slate-700 hover:text-blue-600 font-bold py-4 px-10 rounded-2xl shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <Info className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Get Info
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
                Achievements
              </span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and customer
              satisfaction
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {statistics.map((stat) => (
              <motion.div
                key={stat.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="group relative text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div
                    className={`p-4 ${stat.bgColor} backdrop-blur-sm rounded-2xl mb-6`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black mb-2">
                    <CountUpNumber end={stat.number} suffix={stat.suffix} />
                  </h3>
                  <p className="text-lg font-bold text-white mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-slate-400">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 mb-6 text-lg">
              Ready to become part of our success story?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white cursor-pointer text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 shadow-lg"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Information;
