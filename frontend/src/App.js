import "./App.css";
import DokoNavbar from "./Components/Navbar/DokoNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";

// Admin Section
import AdminNavBar from "./Components/Admin/AdminNavBar/AdminNavBar";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ListProduct from "./Components/Admin/ListProduct/ListProduct";
import ViewOrder from "./Components/Admin/ViewOrder/ViewOrder";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DokoNavbar />}>
            <Route index element={<Shop />} />
            <Route path="shop" element={<Shop />} />
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
            <Route path="signup" element={<LoginSignup />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="/admin" element={<AdminNavBar />}>
            <Route index element={<ListProduct />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="listproduct" element={<ListProduct />} />
            <Route path="vieworder" element={<ViewOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;