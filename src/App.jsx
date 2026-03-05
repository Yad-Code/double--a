import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 1. ADD THIS IMPORT
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import Home from "./pages/Home.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Navbar from "./components/layout/Navbar/Navbar.jsx";

import "./assets/App.css";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

        {/* 2. ADD THE WIDGET HERE */}
        <TawkMessengerReact
          propertyId="69a9d415751b031c372cd7e3"
          widgetId="1jivm8tgm"
        />
      </Router>
    </>
  );
}

export default App;
