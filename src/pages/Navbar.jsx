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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Netralay", href: "#" },
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
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href) => {
    if (href === '#booking-section') {
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
      {/* Elegant top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/60 via-blue-500/80 to-purple-400/60">
        <div className="h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
      </div>

      {/* Top section with logo and contact info */}
      <div className="border-b border-slate-200/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo with subtle animation */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative hover-lift">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <img
                  src="dhanganga.jpg"
                  alt="DhanGanga"
                  className="h-30 w-auto object-contain relative z-10 drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-400 animate-bounce-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Contact info - Hidden on mobile, visible on tablet+ */}
            <div className="hidden xl:flex items-center space-x-4">
              <div className="group flex items-center space-x-3 px-3 py-2.5 rounded-2xl hover:bg-slate-50/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-200/50 hover-lift">
                <div className="p-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Call Us</p>
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                    +91 9234692692
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-3 px-3 py-2.5 rounded-2xl hover:bg-slate-50/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-200/50 hover-lift">
                <div className="p-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Location</p>
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors duration-300">
                    Bhagalpur, Bihar
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-3 px-3 py-2.5 rounded-2xl hover:bg-slate-50/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-200/50 hover-lift">
                <div className="p-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                  <Clock className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Open Hours</p>
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-purple-600 transition-colors duration-300">
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons with refined styling */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {[
                {
                  Icon: Facebook,
                  gradient: "from-blue-500 to-blue-600",
                  hoverColor: "hover:text-white",
                },
                {
                  Icon: Twitter,
                  gradient: "from-sky-400 to-sky-500",
                  hoverColor: "hover:text-white",
                },
                {
                  Icon: Instagram,
                  gradient: "from-pink-500 to-purple-500",
                  hoverColor: "hover:text-white",
                },
                {
                  Icon: Linkedin,
                  gradient: "from-blue-600 to-blue-700",
                  hoverColor: "hover:text-white",
                },
              ].map(({ Icon, gradient, hoverColor }, index) => (
                <div
                  key={index}
                  className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/80 hover:bg-gradient-to-r ${gradient.includes('blue-5') ? 'hover:from-blue-500 hover:to-blue-600' : gradient.includes('sky') ? 'hover:from-sky-400 hover:to-sky-500' : gradient.includes('pink') ? 'hover:from-pink-500 hover:to-purple-500' : 'hover:from-blue-600 hover:to-blue-700'} ${hoverColor} transition-all duration-400 hover:scale-110 hover:shadow-lg cursor-pointer group border border-slate-200/40 hover:border-transparent relative overflow-hidden hover-lift`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 group-hover:text-inherit transition-all duration-300 relative z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation with elegant styling */}
      <nav className="relative bg-gradient-to-r from-slate-50/95 to-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-1 py-2">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href === '#booking-section') {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                    className="flex items-center gap-1 px-4 py-3 text-slate-700 font-semibold text-sm hover:text-blue-600 transition-all duration-400 relative overflow-hidden group-hover:bg-blue-50/80 rounded-xl backdrop-blur-sm border border-transparent hover:border-blue-200/50 hover-lift"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </span>

                    {/* Elegant underline */}
                    <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-400 group-hover:w-3/5 rounded-full"></span>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-blue-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 sm:p-3 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-300 border border-slate-200/50 hover:border-blue-300/50 hover-lift focus-ring"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Menu
                  className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-90"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>

            {/* Elegant CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={scrollToBooking}
                className="btn-primary flex items-center gap-2 hover-lift text-sm px-5 py-2.5"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-card mx-4 sm:mx-6 mb-4 border border-slate-200/50">
            <div className="p-4 sm:p-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href === '#booking-section') {
                          e.preventDefault();
                          handleNavClick(item.href);
                        } else {
                          handleNavClick(item.href);
                        }
                      }}
                      className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-blue-200/50 text-center"
                    >
                      <span className="flex items-center justify-center">
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown className="w-4 h-4 text-slate-400 ml-1" />
                        )}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="pt-4 border-t border-slate-200/50">
                  <button
                    onClick={scrollToBooking}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </button>
                </li>
              </ul>

              {/* Mobile contact info */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 space-y-3">
                <div className="text-center">
                  <p className="text-xs text-slate-500 font-medium">Call Us</p>
                  <p className="text-sm font-semibold text-slate-700">+91 9234692692</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 font-medium">Location</p>
                  <p className="text-sm font-semibold text-slate-700">Bhagalpur, Bihar</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 font-medium">Open Hours</p>
                  <p className="text-sm font-semibold text-slate-700">9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
