const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="relative group bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

      {/* Icon */}
      <div className="flex justify-center mb-6 relative z-10">
        <div className="text-5xl transform group-hover:scale-125 transition-transform duration-500">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center leading-tight relative z-10 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center relative z-10">
        {description}
      </p>

      {/* Discover Now Link */}
      <div className="text-center relative z-10">
        <a
          href={link}
          className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300"
        >
          Discover now →
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
