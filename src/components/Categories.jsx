function Categories(props) {
  const categories = [
    { id: 0, name: "All", icon: "🛒" },
    { id: 1, name: "Fashion", icon: "👗" },
    { id: 2, name: "Electronics", icon: "🎧" },
    { id: 3, name: "Shoes", icon: "👟" },
    { id: 4, name: "Accessories", icon: "⌚" },
  ];

  return (
    <section id="categories" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Shop by <span className="text-pink-500">Category</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((item) => (
          <div
            key={item.id}
            onClick={() => props.onSelectCategory(item.name)}
            className={
              "border hover:-translate-y-1 transition rounded-xl py-8 text-center cursor-pointer " +
              (props.selectedCategory === item.name
                ? "bg-pink-500 border-pink-500"
                : "bg-gray-900 border-gray-800 hover:border-pink-500")
            }
          >
            <div className="text-5xl mb-3">{item.icon}</div>
            <h3 className="font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;