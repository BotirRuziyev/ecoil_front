import { Route, Router, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import ProductDetail from "./pages/Product/ProductDetail";

function App() {
  const location = useLocation();
  return (
    <div className="app-container">
      <Header
        addClass={location.pathname !== "/" ? "inner-pages__header" : ""}
      />
      <main
        className={
          "main-content " + (location.pathname !== "/" ? "inner-pages" : "")
        }
      >
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
