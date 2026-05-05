import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Success from "./pages/Success";
import Login from "./pages/Login";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}