function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-16 md:py-24">
        {/* Left side: text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-pink-400 font-semibold mb-3">New Collection 2026</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Shop the Latest <span className="text-pink-500">Trends</span> at Best Prices
          </h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
            Fashion, electronics, shoes and accessories, all in one place. Free delivery on orders above $50.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#products"
              className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-lg font-semibold"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition px-6 py-3 rounded-lg font-semibold"
            >
              Browse Categories
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <img
            src="/images/hero.avif"
            alt="New collection"
            className="w-72 h-80 md:w-96 md:h-[28rem] object-cover rounded-3xl shadow-2xl shadow-pink-500/30"
          />
          <div className="absolute bottom-6 left-4 md:left-10 bg-gray-900/90 border border-pink-500 rounded-xl px-4 py-3">
            <p className="text-pink-400 font-bold text-lg">30% OFF</p>
            <p className="text-gray-300 text-xs">On new arrivals</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;