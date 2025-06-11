import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/Homepage";
import Navbar from "./components/NavBar/Navbar";
import Aboutus from "./components/AboutUs/Aboutus";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contactus from "./components/ContactUs/Contactus";
import Footer from "./components/FooterBar/Footer";
import "./App.css";
import ConsultationModal from "./components/Consultation/ConsultationModal";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/consultationModal" element={<ConsultationModal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
