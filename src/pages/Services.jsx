import ServiceCard from "../components/ServiceCard";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Dhanganga Online Public Kendra",
      description: "Responsive and functional IT design worldwide.",
      icon: "💻",
      link: "#",
    },
    {
      id: 2,
      title: "Dhanganga Associate",
      description: "Delivering professional IT services and solutions.",
      icon: "⚖️",
      link: "#",
    },
    {
      id: 3,
      title: "Dhanganga Physical Treatment Home",
      description: "Modern approach to physical wellness & care.",
      icon: "🏥",
      link: "#",
    },
    {
      id: 4,
      title: "Dhanganga Store",
      description: "Your trusted source for products & services.",
      icon: "🏪",
      link: "#",
    },
    {
      id: 5,
      title: "Dhanganga Real Estate",
      description: "Helping you find your dream properties.",
      icon: "🏢",
      link: "#",
    },
    {
      id: 6,
      title: "Dhanganga Hire Services",
      description: "Providing on-demand professional services.",
      icon: "🔧",
      link: "#",
    },
    {
      id: 7,
      title: "Dhanganga Hire Vehicle",
      description: "Vehicle rental solutions for all your needs.",
      icon: "🚗",
      link: "#",
    },
    {
      id: 8,
      title: "Naye Soch Naya Kadam",
      description: "Innovative solutions for a brighter tomorrow.",
      icon: "💡",
      link: "#",
    },
    {
      id: 9,
      title: "Netralay",
      description: "Eye care and vision wellness at its best.",
      icon: "👁️",
      link: "#",
    },
    {
      id: 10,
      title: "Dhanganga Mystics Healing",
      description: "Spiritual & holistic healing practices.",
      icon: "✨",
      link: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Services We Deliver
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            We provide{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-bold">
              Various Services.
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
            Talk to a Consultant
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
