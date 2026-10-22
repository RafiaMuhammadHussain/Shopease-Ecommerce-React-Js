import ProductCard from "./ProductCard";

function ProductList(props) {
  const products = [
    { id: 1, name: "Summer Dress", category: "Fashion", price: 39, rating: 4.5, image: "/images/summer-dress.avif" },
    { id: 2, name: "Wireless Headphones", category: "Electronics", price: 79, rating: 4.7, image: "/images/headphones.avif" },
    { id: 3, name: "Running Shoes", category: "Shoes", price: 59, rating: 4.4, image: "/images/running-shoes.avif" },
    { id: 4, name: "Smart Watch", category: "Accessories", price: 99, rating: 4.6, image: "/images/smart-watch.avif" },
    { id: 5, name: "Denim Jacket", category: "Fashion", price: 49, rating: 4.3, image: "/images/denim-jacket.avif" },
    { id: 6, name: "Bluetooth Speaker", category: "Electronics", price: 45, rating: 4.5, image: "/images/speaker.avif" },
    { id: 7, name: "Sneakers", category: "Shoes", price: 65, rating: 4.8, image: "/images/sneakers.avif" },
    { id: 8, name: "Sunglasses", category: "Accessories", price: 25, rating: 4.2, image: "/images/sunglasses.avif" },
  ];

  const filteredProducts =
    props.selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === props.selectedCategory);

  return (
    <section id="products" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        {props.selectedCategory === "All" ? "Featured" : props.selectedCategory}{" "}
        <span className="text-pink-500">Products</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            rating={item.rating}
            image={item.image}
            onAddToCart={props.onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;