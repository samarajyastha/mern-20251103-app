import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import ProductsLayout from "./layout/ProductsLayout";
import ProductsCart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<Products />} />
            <Route path="cart" element={<ProductsCart />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>

        <Route path="*" element={"404 page not found."} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
