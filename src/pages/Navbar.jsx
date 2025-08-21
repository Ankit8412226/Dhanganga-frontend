import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
      {/* Top section with logo and social icons */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://nayesochnayakadam.com/assets/images/logo/logo-dark.webp"
                alt="DhanGanga"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Contact info - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 9234692692</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Bhagalpur, Bihar</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4">
              {[
                { Icon: Facebook, color: "hover:text-blue-600" },
                { Icon: Twitter, color: "hover:text-blue-400" },
                { Icon: Instagram, color: "hover:text-pink-500" },
                { Icon: Linkedin, color: "hover:text-blue-700" },
              ].map(({ Icon, color }, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-full bg-gray-50 ${color} transition-all duration-300 hover:bg-gray-100 hover:scale-110 cursor-pointer group`}
                >
                  <Icon className="w-4 h-4 text-gray-600 group-hover:text-inherit transition-colors duration-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 w-1/3 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-1 py-1">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.href}
                    className="block px-6 py-4 text-white/90 font-medium text-lg hover:text-white transition-all duration-300 relative overflow-hidden group-hover:bg-white/10 rounded-lg"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* CTA Button */}
            {/* <div className="hidden lg:block">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </div> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-blue-800/95 backdrop-blur-sm border-t border-white/10">
            <div className="container mx-auto px-6 py-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <button className="w-full bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
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
