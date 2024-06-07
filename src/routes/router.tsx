import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/AboutUs";
import ContactPage from "../pages/Contact";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import ShopPage from "../pages/Shop";
import AccountPage from "../pages/auth/Account";
import WishListPage from "../pages/auth/WishList";
import ProfilePage from "../pages/auth/Profile";
import CheckoutPage from "../pages/Checkout";
import ProductDetailPage from "../pages/ProductDetail";
import ShoppingCartPage from "../pages/ShoppingCart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/magaza" element={<ShopPage />} />
      <Route path="/urun/:name" element={<ProductDetailPage />} />
      <Route path="/hakkimizda" element={<AboutPage />} />
      <Route path="/iletisim" element={<ContactPage />} />
      <Route path="/giris" element={<LoginPage />} />
      <Route path="/uyelik" element={<RegisterPage />} />
      <Route path="/odeme" element={<CheckoutPage />} />
      <Route path="/hesap" element={<AccountPage />} />
      <Route path="/istek_listesi" element={<WishListPage />} />
      <Route path="/sepet" element={<ShoppingCartPage/>} />
      <Route path="/profil" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
