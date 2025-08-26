import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Dhanganga Online Public Kendra",
      description: "Responsive and functional IT design worldwide.",
      icon: "💻",
      link: "/discover-Public-Kendra",
      category: "Digital Services",
    },
    {
      id: 2,
      title: "Dhanganga Associate",
      description: "Delivering professional IT services and solutions.",
      icon: "⚖️",
      link: "/discover-Association",
      category: "Professional Services",
    },
    {
      id: 3,
      title: "Dhanganga Physical Treatment Home",
      description: "Modern approach to physical wellness & care.",
      icon: "🏥",
      link: "/disocver-Physical",
      category: "Healthcare",
    },
    {
      id: 4,
      title: "Dhanganga Store",
      description: "Your trusted source for products & services.",
      icon: "🏪",
      link: "/discover-Store",
      category: "Retail",
    },
    {
      id: 5,
      title: "Dhanganga Real Estate",
      description: "Helping you find your dream properties.",
      icon: "🏢",
      link: "/discover-RealEstate",
      category: "Real Estate",
    },
    {
      id: 6,
      title: "Dhanganga Hire Services",
      description: "Providing on-demand professional services.",
      icon: "🔧",
      link: "/discover-Hire",
      category: "Professional Services",
    },
    {
      id: 7,
      title: "Dhanganga Hire Vehicle",
      description: "Vehicle rental solutions for all your needs.",
      icon: "🚗",
      link: "/discover-Vehicle",
      category: "Transportation",
    },
    {
      id: 8,
      title: "Naye Soch Naya Kadam",
      description: "Innovative solutions for a brighter tomorrow.",
      icon: "💡",
      link: "/discover-NayeSoch",
      category: "Innovation",
    },
    {
      id: 9,
      title: "Netralay",
      description: "Eye care and vision wellness at its best.",
      icon: "👁️",
      link: "/discover-Netralay",
      category: "Healthcare",
    },
    {
      id: 10,
      title: "Dhanganga Mystics Healing",
      description: "Spiritual & holistic healing practices.",
      icon: "✨",
      link: "/discover-Healing",
      category: "Wellness",
    },
  ];

  const stats = [
    { number: "50+", label: "Services Offered", icon: Star },
    { number: "10K+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Sparkles },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700">
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="block">Services We</span>
            <span className="block text-gradient">Deliver</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-transparent bg-clip-text font-bold">
              comprehensive services
            </span>{" "}
            tailored to meet your every need with excellence and innovation.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                category={service.category}
              />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="glass-card max-w-4xl mx-auto p-8 sm:p-10 lg:p-12 border border-slate-200/50">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Let's discuss how our services can help transform your
                  business and achieve your goals.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <button className="group w-full sm:w-auto btn-primary flex items-center justify-center gap-3 px-6 sm:px-10 py-4 text-base sm:text-lg font-bold hover-lift">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Talk to a Consultant
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className="group w-full sm:w-auto btn-secondary flex items-center justify-center gap-3 px-6 sm:px-10 py-4 text-base sm:text-lg font-bold hover-lift"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Contact Us Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Contact Information */}
              <div className="pt-6 sm:pt-8 border-t border-slate-200/50">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>+91 9234692692</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
