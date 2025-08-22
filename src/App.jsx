import Discover from "./pages/Discover";
import Experts from "./pages/Expert";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Information from "./pages/Information";
import Navbar from "./pages/Navbar";
import Service from "./pages/Services";

function App() {
  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Container with top padding to account for fixed navbar */}
      <main className="pt-32 sm:pt-36 lg:pt-40">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Service />

        {/* Discover Section */}
        <Discover />

        {/* Experts Section */}
        <Experts />

        {/* Information Section */}
        <Information />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
