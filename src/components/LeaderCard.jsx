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

const LeaderCard = () => {
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
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {experts.map((expert, index) => (
          <div
            key={expert.id}
            className="group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderCard;
