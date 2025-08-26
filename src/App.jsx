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
import LearnMore from "./pages/LearnMore";
import DiscoverPublicKendra from "./pages/LearnMore";
import DiscoverAssociate from "./pages/DiscoverAssociate";
import DiscoverPhysical from "./pages/DiscoverPhysical";
import DiscoverStore from "./pages/DiscoverStore";
import DiscoverRealEstate from "./pages/DiscoverRealEstate";
import DiscoverHire from "./pages/DiscoverHire";

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
            {/* Discover Public Kendra Page */}
            <Route path="/discover-Public-Kendra" element={<DiscoverPublicKendra/>} />
            {/* Discover Association Page */}
            <Route path="/discover-Association" element= {<DiscoverAssociate/>} />
            {/* Discover Physical Page */}
            <Route path="/disocver-Physical" element = {<DiscoverPhysical/>} />
            {/* Discover Store */}
            <Route path="/discover-Store" element = {<DiscoverStore/>} />
            {/* Discover Real Estate Page */}
            <Route path="/discover-RealEstate" element = {<DiscoverRealEstate/>} />
            {/* Discover Hire Page */}
            <Route path="/discover-Hire" element = {<DiscoverHire/>} />
          </Routes>
        </main>

        {/* Footer (common on all pages) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
