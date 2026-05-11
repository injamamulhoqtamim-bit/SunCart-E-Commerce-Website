"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 bg-white flex flex-col overflow-hidden">

      {/* Image */}
      <div className="w-full h-40 sm:h-48 md:h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/300x200";
          }}
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">

        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h2>

        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {product.rating}
        </p>

        <p className="text-orange-500 font-bold text-base sm:text-lg mt-1">
          ${product.price}
        </p>

        {/* Button */}
        <Link
          href={`/product/${product.id}`}
          className="mt-auto"
        >
          <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition text-sm sm:text-base">
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
}