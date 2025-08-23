import React from "react";
import {
  Award,
  Briefcase,
  Info,
  MessageCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";

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

const InformationCard = () => {
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
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}

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
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`p-4 ${stat.bgColor} backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
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
      </div>
    </section>
  );
};

export default InformationCard;
