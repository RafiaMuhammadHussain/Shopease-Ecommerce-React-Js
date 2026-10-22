function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-3">ShopEase</h2>
          <p className="text-gray-400 text-sm">
            Your one stop shop for fashion, electronics, shoes and accessories.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#categories" className="hover:text-pink-400 transition">Categories</a></li>
            <li><a href="#products" className="hover:text-pink-400 transition">Products</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 Karachi, Pakistan</li>
            <li>📧 support@shopease.com</li>
            <li>📞 +92 300 0000000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-gray-500 text-sm py-4">
        © 2026 ShopEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;