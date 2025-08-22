import { ExternalLink, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="group">
                <img
                  src="https://nayesochnayakadam.com/assets/images/logo/dark-logo-160x48.webp"
                  alt="Dhanganga"
                  className="w-[160px] brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    NAYATOLA TINPULIYA (GANESHPUR) P.O.-KHIRIBANDH, P.S.-
                    JAGDISHPUR, DIST.-BHAGALPUR
                  </p>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:manturani.pp@gmail.com"
                    className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300"
                  >
                    manturani.pp@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="tel:+919234692692"
                    className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors duration-300"
                  >
                    (+91) 9234692692
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="https://nayesochnayakadam.com"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300 font-medium"
                  >
                    Nayesochnayakadam.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  "Dhanganga Online Public Kendra",
                  "Dhanganga Associate",
                  "Dhanganga Physical Treatment Home",
                  "Dhanganga Store",
                  "Dhanganga Real Estate",
                  "Dhanganga Hire Services",
                  "Dhanganga Hire Vehicle"
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-400/50 rounded-full group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300"></div>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  "Book Services",
                  "Terms of Payment",
                  "Privacy Policy"
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-emerald-400/50 rounded-full group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300"></div>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & App */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Support
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  "Forum Support",
                  "Help & FAQ",
                  "Contact Us"
                ].map((support, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-purple-400/50 rounded-full group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-300"></div>
                      {support}
                    </a>
                  </li>
                ))}
              </ul>

              {/* App Download */}
              <div className="pt-4">
                <p className="text-sm text-slate-400 mb-3 font-medium">Download Our App</p>
                <div className="group cursor-pointer">
                  <img
                    src="https://nayesochnayakadam.com/assets/images/icons/aeroland-button-google-play.webp"
                    alt="Get it on Google Play"
                    className="h-12 group-hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-slate-400">
                © 2021 <span className="text-white font-semibold">Dhanganga Associate</span>. All Rights Reserved.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <p className="text-sm text-slate-400 hidden sm:block">Follow us:</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, label: "Twitter", color: "hover:text-sky-400" },
                    { icon: Facebook, label: "Facebook", color: "hover:text-blue-500" },
                    { icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
                    { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" }
                  ].map(({ icon: Icon, label, color }) => (
                    <a
                      key={label}
                      href="#"
                      className={`group relative p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-400 ${color} transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:border-white/20`}
                      aria-label={label}
                    >
                      <Icon size={18} />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;
