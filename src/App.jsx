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
import DashboardAbout from "./dashboard/About";
import DashboardServices from "./dashboard/Services";
import DashboardServiceEdit from "./dashboard/Services/ServiceEdit";
import DashboardServiceAdd from "./dashboard/Services/ServiceAdd";
import DashboardContact from "./dashboard/Contact";
import ServiceBasket from "./dashboard/Services/ServiceBasket";
import DashboardProduct from "./dashboard/Product";
import DashboardProductAdd from "./dashboard/Product/ProductAdd";
import DashboardProductEdit from "./dashboard/Product/ProductEdit";
import ProductBasket from "./dashboard/Product/ProductBasket";
import DashboardDocument from "./dashboard/Document";
import DashboardDocumentAdd from "./dashboard/Document/DocumentAdd";
import DashboardDocumentEdit from "./dashboard/Document/DocumentEdit";
import DocumentBasket from "./dashboard/Document/DocumentBasket";
import Login from "./dashboard/auth/Login";
import Register from "./dashboard/Auth/Register";

function App() {
  const [isOpenBar, setOpenBar] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const login = location.pathname.startsWith("/dashboard/login");
  const register = location.pathname.startsWith("/dashboard/register");

  return (
    <div className="app-container">
      {!isDashboard && (
        <Header
          addClass={location.pathname !== "/" ? "inner-pages__header" : ""}
          setOpenBar={setOpenBar}
          isOpenBar={isOpenBar}
        />
      )}
      {isDashboard && !login && !register && <DashboardHeader />}
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
          <Route path="/dashboard/login" element={<Login />} />
          <Route path="/dashboard/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/about" element={<DashboardAbout />} />
          <Route path="/dashboard/services" element={<DashboardServices />} />
          <Route
            path="/dashboard/service/add"
            element={<DashboardServiceAdd />}
          />
          <Route
            path="/dashboard/service/edit"
            element={<DashboardServiceEdit />}
          />
          <Route
            path="/dashboard/services/basket"
            element={<ServiceBasket />}
          />
          <Route path="/dashboard/product" element={<DashboardProduct />} />
          <Route
            path="/dashboard/product/add"
            element={<DashboardProductAdd />}
          />
          <Route
            path="/dashboard/product/edit"
            element={<DashboardProductEdit />}
          />
          <Route path="/dashboard/product/basket" element={<ProductBasket />} />
          <Route path="/dashboard/document" element={<DashboardDocument />} />
          <Route
            path="/dashboard/document/add"
            element={<DashboardDocumentAdd />}
          />
          <Route
            path="/dashboard/document/edit"
            element={<DashboardDocumentEdit />}
          />
          <Route
            path="/dashboard/document/basket"
            element={<DocumentBasket />}
          />
          <Route path="/dashboard/news" element={<DashboardNews />} />
          <Route path="/dashboard/news/edit" element={<DashboardNewsEdit />} />
          <Route path="/dashboard/contact" element={<DashboardContact />} />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
