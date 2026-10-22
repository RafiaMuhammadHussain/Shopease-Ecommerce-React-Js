function ProductCard(props) {
  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition">
      <div className="h-56 overflow-hidden bg-gray-800">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <p className="text-xs text-pink-400 font-semibold mb-1">{props.category}</p>
        <h3 className="font-semibold text-lg mb-2">{props.name}</h3>
        <p className="text-yellow-400 text-sm mb-3">⭐ {props.rating}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${props.price}</span>
          <button
            onClick={props.onAddToCart}
            className="bg-pink-500 hover:bg-pink-600 transition text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;