import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Experts from "./pages/Expert";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Information from "./pages/Information";
import Navbar from "./pages/Navbar";
import NetralayPage from "./pages/Netralay";
import Service from "./pages/Services";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";
import News from "./pages/News";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact"; 
import MainService from "./pages/MainServices";

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Navbar fixed top */}
        <Navbar />

        {/* Page wrapper with top padding for fixed Navbar */}
        <main className="pt-32 sm:pt-36 lg:pt-40">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Service />
                  <Discover />
                  <Experts />
                  <Information />
                </>
              }
            />
            {/* Netralay Page */}
            <Route path="/netralay" element={<NetralayPage />} />
            {/* About Page */}
            <Route path="/about" element={<About />} />
            {/* Join Us / Membership Page */}
            <Route path="/join-us" element={<JoinUs />} />
            {/* Appointment Page */}
            <Route path="/appoinment" element={<Hero />} />
            {/* News Page */}
            <Route path="/news" element={<News />} />
            {/* Offer Page */}
            <Route path="/offer" element={<Offer />} />
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} /> 
            {/* Main Service page */}
            <Route path="/MainService" element={<MainService/>} />
          </Routes>
        </main>

        {/* Footer (common on all pages) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
