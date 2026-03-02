import "./assets/App.css";
import Hero from "./components/home/Hero/Hero.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Review from "./components/layout/Footer/Review.jsx";
import Navbar from "./components/layout/Navbar/Navbar.jsx";
import ProductSection from "./components/shop/Product/ProductSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <Review />
      <Footer />
    </>
  );
}

export default App;
