import { ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, description, icon, link, category }) => {
  const navigate = useNavigate();
  return (
    <div className="group relative">
      {/* Card container with enhanced styling */}
      <div className="glass-card h-full p-6 sm:p-8 hover-lift transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10 border border-slate-200/50 group-hover:border-blue-300/30 relative overflow-hidden">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Category badge */}
          {category && (
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/50">
                {category}
              </span>
            </div>
          )}

          {/* Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-200/30 group-hover:border-blue-300/50">
              <span className="text-3xl filter group-hover:brightness-110 transition-all duration-300">
                {icon}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>

          {/* Action button/link */}
          <div className="flex items-center justify-between">
            <a
              href={link}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300"
            >
              Discover now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* External link icon */}
            <div className="w-8 h-8 bg-slate-100/80 cursor-pointer rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 opacity-0 group-hover:opacity-100">
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
