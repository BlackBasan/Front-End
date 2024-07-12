import RootLayout from "./layouts/RootLayout"
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import Home from "./pages/home.jsx";
import CategoryProducts from "./pages/category-product.jsx";
import ProductDetails from "./pages/product-details.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="/category/:categoryName" element={<CategoryProducts />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
