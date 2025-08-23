import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Experts from "./pages/Expert";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Information from "./pages/Information";
import Navbar from "./pages/Navbar";
import NetralayPage from "./pages/Netralay";
import Service from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Navbar fixed top */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <main className="pt-32 sm:pt-36 lg:pt-40">
                <Hero />
                <Service />
                <Discover />
                <Experts />
                <Information />
              </main>
            }
          />

          {/* Netralay Page */}
          <Route path="/netralay" element={<NetralayPage />} />
        </Routes>

        {/* Footer (common on all pages) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
