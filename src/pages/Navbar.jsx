import {
  Calendar,
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Twitter,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Netralay", href: "/netralay" },
    { name: "About", href: "#" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Appointment", href: "#booking-section" },
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

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href) => {
    if (href === "#booking-section") {
      scrollToBooking();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "glass-effect shadow-2xl shadow-slate-200/30"
          : "bg-gray-200 backdrop-blur-md shadow-xl shadow-slate-100/40"
      }`}
    >
      {/* Top section with logo & contact */}
      <div className="border-b border-slate-200/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative hover-lift">
                <img
                  src="dhanganga.jpg"
                  alt="DhanGanga"
                  className="h-30 w-auto object-contain relative z-10 drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-400 animate-bounce-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Contact info desktop */}
            <div className="hidden xl:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm">+91 9234692692</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-sm">Bhagalpur, Bihar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="text-sm">9:00 AM - 8:00 PM</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-4 h-4 text-gray-600 hover:text-blue-600 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <nav className="relative bg-gradient-to-r from-slate-50/95 to-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Desktop nav */}
            <ul className="hidden lg:flex space-x-1 py-2">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.href.startsWith("/") ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-1 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                        location.pathname === item.href
                          ? "text-blue-600"
                          : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href === "#booking-section") {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }
                      }}
                      className="flex items-center gap-1 px-4 py-3 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-xl"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Book Appointment CTA (desktop) */}
            <div className="hidden lg:block">
              <button
                onClick={scrollToBooking}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 pb-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.href.startsWith("/") ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                        location.pathname === item.href
                          ? "text-blue-600"
                          : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href === "#booking-section") {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }
                      }}
                      className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={scrollToBooking}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Appointment
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
