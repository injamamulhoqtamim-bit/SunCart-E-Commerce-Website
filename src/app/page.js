import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="px-4 md:px-10 py-6 bg-gray-100 min-h-screen text-gray-900">

      {/* 🌅 Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white p-8 md:p-12 text-center rounded-2xl mb-10 shadow-xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Summer Sale 50% OFF ☀️
        </h1>
        <p className="text-sm md:text-lg">
          Hot deals on all summer items 🔥
        </p>
      </div>

      {/* 🔥 Popular Products */}
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        🔥 Popular Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* ➕ Summer Care Tips */}
      <div className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          🌿 Summer Care Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            💧 Drink plenty of water daily
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            🧴 Use sunscreen before going outside
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            🕶️ Wear sunglasses for eye protection
          </div>
        </div>
      </div>

      {/* ➕ Top Brands */}
      <div className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          🏆 Top Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 text-center rounded-xl shadow hover:shadow-lg transition">
            Nike
          </div>
          <div className="bg-white p-6 text-center rounded-xl shadow hover:shadow-lg transition">
            Adidas
          </div>
          <div className="bg-white p-6 text-center rounded-xl shadow hover:shadow-lg transition">
            Puma
          </div>
          <div className="bg-white p-6 text-center rounded-xl shadow hover:shadow-lg transition">
            Zara
          </div>
        </div>
      </div>

    </div>
  );
}