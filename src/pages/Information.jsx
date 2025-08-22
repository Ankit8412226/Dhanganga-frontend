import { Award, Briefcase, Info, MessageCircle, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

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
            const currentCount = Math.floor(startCount + (end - startCount) * easeOutQuart);

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
      {count}{suffix}
    </span>
  );
};

const Information = () => {
  const statistics = [
    {
      id: 1,
      number: 1200,
      suffix: "+",
      label: "Happy Clients",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      description: "Satisfied customers worldwide"
    },
    {
      id: 2,
      number: 320,
      suffix: "+",
      label: "Projects Completed",
      icon: Briefcase,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/10",
      description: "Successful deliveries"
    },
    {
      id: 3,
      number: 78,
      suffix: "+",
      label: "Skilled Experts",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      description: "Professional team members"
    },
    {
      id: 4,
      number: 318,
      suffix: "+",
      label: "Media Posts",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      description: "Content shared"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20 px-6 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-emerald-400/5 rounded-full blur-2xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Enhanced text content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-2 text-blue-600 text-sm font-semibold uppercase tracking-wide mb-6">
                <Award className="w-4 h-4" />
                Excellence in Service
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
                We run all kinds of services that vow your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent bg-clip-text">
                    success
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                From healthcare to technology, we deliver comprehensive solutions
                designed to exceed expectations and drive remarkable results.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                {["24/7 Support", "Expert Team", "Proven Results"].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Enhanced buttons */}
            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
              {/* Primary CTA Button */}
              <button className="group relative cursor-pointer overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-500">
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                <span className="relative flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Let's Talk
                </span>
              </button>

              {/* Secondary CTA Button */}
              <button className="group relative cursor-pointer overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-blue-200/50 text-slate-700 hover:text-blue-600 font-bold py-4 px-10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 hover:border-blue-400/50 hover:bg-white/90">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="relative flex items-center justify-center gap-3">
                  <Info className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Get Info
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our <span className="bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">Achievements</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and customer satisfaction
            </p>
          </div>

          {/* Statistics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={stat.id}
                className="group relative text-center hover:scale-105 transition-transform duration-300"
              >
                {/* Card background with gradient border */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-white/20 transition-all duration-500">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 ${stat.bgColor} backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Number with animation */}
                  <h3 className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-105 transition-transform duration-300">
                    <CountUpNumber end={stat.number} suffix={stat.suffix} />
                  </h3>

                  {/* Label */}
                  <p className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Hover reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-300 mb-6 text-lg">
              Ready to become part of our success story?
            </p>
            <button className="bg-white cursor-pointer text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
