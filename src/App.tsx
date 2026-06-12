import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/producto/:id" element={<ProductPage />} />
      <Route path="/coleccion" element={<CollectionPage />} />
    </Routes>
  );
}
