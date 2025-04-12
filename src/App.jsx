import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import ProductDetail from "./pages/Product/ProductDetail";
import DashboardHome from "./dashboard/Home";
import DashboardNews from "./dashboard/News";
import DashboardHeader from "./components/DashbardHeader";
import DashboardNewsEdit from "./dashboard/News/NewsEdit";
import { useState } from "react";

function App() {
  const [isOpenBar, setOpenBar] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="app-container">
      {!isDashboard && (
        <Header
          addClass={location.pathname !== "/" ? "inner-pages__header" : ""}
          setOpenBar={setOpenBar}
          isOpenBar={isOpenBar}
        />
      )}
      {isDashboard && <DashboardHeader />}
      <main
        className={
          "main-content " +
          (location.pathname !== "/" && !isDashboard ? "inner-pages" : "")
        }
      >
        {!isDashboard && location.pathname !== "/" && (
          <NavBar openBar={isOpenBar} />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/news" element={<DashboardNews />} />
          <Route path="/dashboard/news/edit" element={<DashboardNewsEdit />} />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
