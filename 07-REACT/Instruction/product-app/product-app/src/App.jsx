import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import ProductDetails from "./pages/product-details"
import NotFoundPage from "./pages/not-found"
import RootLayout from "./layouts/RootLayout"
import CategoryProducts from "./pages/category-products"

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="products/category/:categoryName" element={<CategoryProducts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App