import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={product.image} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p>⭐ {product.rating}</p>
      <p className="text-orange-500">${product.price}</p>

      <Link href={`/product/${product.id}`}>
        <button className="mt-2 bg-orange-400 text-white px-3 py-1 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}