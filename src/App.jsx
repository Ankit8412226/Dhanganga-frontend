import BookingModal from "./pages/AppointmentForm";
import Discover from "./pages/Discover";
import Experts from "./pages/Expert";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Information from "./pages/Information";
import Navbar from "./pages/Navbar";
import Service from "./pages/Services";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Service/>
      <Discover/>
      <Experts/>
      <Information/>
      <Footer/>
    </div>
  );
}

export default App;
