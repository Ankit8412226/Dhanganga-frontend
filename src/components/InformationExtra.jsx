import { Award, Briefcase, Info, MessageCircle, TrendingUp, Users } from "lucide-react";


const InformationExtra = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20 px-6 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-emerald-400/5 rounded-full blur-2xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Enhanced text content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-2 text-blue-600 text-sm font-semibold uppercase tracking-wide mb-6">
                <Award className="w-4 h-4" />
                Excellence in Service
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
                We run all kinds of services that vow your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent bg-clip-text">
                    success
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                From healthcare to technology, we deliver comprehensive
                solutions designed to exceed expectations and drive remarkable
                results.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                {["24/7 Support", "Expert Team", "Proven Results"].map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      {feature}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right side - Enhanced buttons */}
            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
              {/* Primary CTA Button */}
              <button className="group relative cursor-pointer overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-500">
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                <span className="relative flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Let's Talk
                </span>
              </button>

              {/* Secondary CTA Button */}
              <button className="group relative cursor-pointer overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-blue-200/50 text-slate-700 hover:text-blue-600 font-bold py-4 px-10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 hover:border-blue-400/50 hover:bg-white/90">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="relative flex items-center justify-center gap-3">
                  <Info className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Get Info
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default InformationExtra;
