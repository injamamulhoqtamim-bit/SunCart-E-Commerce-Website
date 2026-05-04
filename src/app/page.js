import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="p-6">
      
      {/* Hero Section */}
      <div className="bg-orange-300 p-10 text-center rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Summer Sale 50% OFF ☀️</h1>
        <p>Hot deals on all summer items 🔥</p>
      </div>

      {/* Popular Products */}
      <h2 className="text-2xl font-bold mb-4">Popular Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}