import { useState } from "react";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-pink-500">ShopEase</h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
          <li><a href="#categories" className="hover:text-pink-400 transition">Categories</a></li>
          <li><a href="#products" className="hover:text-pink-400 transition">Products</a></li>
          <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-5 text-xl">
          <button className="hover:text-pink-400 transition">🔍</button>
          <button className="relative hover:text-pink-400 transition">
            🛒
            <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {props.cartCount}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl hover:text-pink-400 transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-4 text-sm font-medium">
          <li><a href="#home" onClick={closeMenu} className="block hover:text-pink-400 transition">Home</a></li>
          <li><a href="#categories" onClick={closeMenu} className="block hover:text-pink-400 transition">Categories</a></li>
          <li><a href="#products" onClick={closeMenu} className="block hover:text-pink-400 transition">Products</a></li>
          <li><a href="#contact" onClick={closeMenu} className="block hover:text-pink-400 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;