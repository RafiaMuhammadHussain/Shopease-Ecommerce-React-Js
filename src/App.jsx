import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />
      <Features />
      <Footer />
    </div>
  );
}

export default App;