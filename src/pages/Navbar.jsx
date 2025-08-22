import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Netralay", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Appointment", href: "#" },
    { name: "Join Us", href: "#" },
    { name: "News", href: "#" },
    { name: "Offer", href: "#" },
    { name: "Contact", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
          : "bg-white/95 backdrop-blur-md shadow-xl"
      }`}
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>

      {/* Top section with logo and contact info */}
      <div className="border-b border-blue-100/50">
        <div className="container mx-auto p-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo with enhanced animation */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative transform hover:scale-110 transition-all duration-500 hover:rotate-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="https://nayesochnayakadam.com/assets/images/logo/logo-dark.webp"
                  alt="DhanGanga"
                  className="h-20 w-auto object-contain relative z-10 drop-shadow-lg"
                />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-blue-500 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Contact info with enhanced styling */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="group flex items-center space-x-3 px-4 py-2 rounded-full hover:bg-blue-50/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-200/50">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Call Us</p>
                  <p className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    +91 9234692692
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-3 px-4 py-2 rounded-full hover:bg-blue-50/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-200/50">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    Bhagalpur, Bihar
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced social icons */}
            <div className="flex items-center space-x-2">
              {[
                {
                  Icon: Facebook,
                  color:
                    "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600",
                  hoverText: "hover:text-white",
                },
                {
                  Icon: Twitter,
                  color:
                    "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600",
                  hoverText: "hover:text-white",
                },
                {
                  Icon: Instagram,
                  color:
                    "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600",
                  hoverText: "hover:text-white",
                },
                {
                  Icon: Linkedin,
                  color:
                    "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600",
                  hoverText: "hover:text-white",
                },
              ].map(({ Icon, color, hoverText }, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 ${color} ${hoverText} transition-all duration-500 hover:scale-110 hover:shadow-lg cursor-pointer group border border-gray-200/50 hover:border-transparent relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
                  <Icon className="w-4 h-4 text-gray-600 group-hover:text-inherit transition-all duration-300 relative z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation with premium styling */}
      <nav className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce delay-300"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-1 py-2">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.href}
                    className="block px-6 py-4 text-white/90 font-semibold text-base hover:text-white transition-all duration-400 relative overflow-hidden group-hover:bg-white/15 rounded-2xl backdrop-blur-sm border border-transparent hover:border-white/20"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.name}
                      {item.name === "Services" && (
                        <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </span>

                    {/* Animated underline */}
                    <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-gradient-to-r from-white to-blue-200 transition-all duration-400 group-hover:w-3/5 rounded-full"></span>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-sm"></div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Enhanced mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-90"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>

            {/* Premium CTA Button */}
            {/* <div className="hidden lg:block">
              <button className="group relative overflow-hidden bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-400 shadow-lg hover:shadow-2xl border-2 border-white hover:border-blue-200">
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Book Appointment
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 translate-y-full group-hover:translate-y-0 transition-transform duration-400"></div>
              </button>
            </div> */}
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-b from-blue-700/95 to-blue-800/95 backdrop-blur-lg border-t border-white/20">
            <div className="container mx-auto px-6 py-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="transform transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <a
                      href={item.href}
                      className="block px-5 py-4 text-white/90 hover:text-white hover:bg-white/15 rounded-xl transition-all duration-300 font-semibold border border-transparent hover:border-white/20 backdrop-blur-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <div className="w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </span>
                    </a>
                  </li>
                ))}
                <li className="pt-6">
                  <button className="w-full bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 transition-all duration-400 shadow-lg flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    Book Appointment
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
