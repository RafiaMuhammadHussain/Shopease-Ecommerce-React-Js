function Features() {
  const features = [
    { id: 1, icon: "🚚", title: "Free Delivery", text: "On all orders above $50" },
    { id: 2, icon: "🔄", title: "Easy Returns", text: "7 days return policy" },
    { id: 3, icon: "🔒", title: "Secure Payment", text: "100% safe checkout" },
    { id: 4, icon: "📞", title: "24/7 Support", text: "We are always here to help" },
  ];

  return (
    <section className="bg-gray-900 py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item) => (
          <div key={item.id} className="text-center">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;