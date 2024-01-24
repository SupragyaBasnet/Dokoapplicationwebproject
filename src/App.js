import "./App.css";
import DokoNavbar from "./Components/Navbar/DokoNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DokoNavbar />}>
            <Route index element={<Shop />}></Route>
            <Route path="shop" element={<Shop />}></Route>
            <Route
              path="men"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="women"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="kids"
              element={<ShopCategory banner={kid_banner} category="kid" />}
            />
            <Route path="product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<LoginSignup />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
