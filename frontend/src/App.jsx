import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Products from "./components/Products/Products";
import ProductList from "./pages/Products/ProductList";
import ProductStore from "./pages/Products/ProductStore";
import ProductUpdate from "./pages/Products/ProductUpdate";
import ProductDetails from "./pages/Products/ProductDetails";

import Catalogue from "./pages/Catalogue";
import Categories from "./pages/Categories/Categories";
import CategoriesUpdate from "./pages/Categories/CategoriesUpdate";

import CategoryStore from "./pages/Categories/CategoryStore";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/drive/products" element={<Products />}></Route>
          <Route path="/drive/catalogue" element={<Catalogue />}></Route>

          {/* Routes Categories */}
          <Route path="/drive/categories" element={<Categories />}></Route>
          <Route
            path="/drive/categories/:id/update"
            element={<CategoriesUpdate />}
          ></Route>
          <Route
            path="/drive/category-store"
            element={<CategoryStore />}
          ></Route>

          {/* Routes Products */}
          <Route path="/drive/products-list" element={<ProductList />}></Route>
          <Route path="/drive/product-store" element={<ProductStore />}></Route>
          <Route
            path="/drive/:id/product-update"
            element={<ProductUpdate />}
          ></Route>
          <Route path="/drive/product/:id" element={<ProductDetails />}></Route>

          {/* Routes Products */}
          <Route path="/drive/register" element={<Register />}></Route>
          <Route path="/drive/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
