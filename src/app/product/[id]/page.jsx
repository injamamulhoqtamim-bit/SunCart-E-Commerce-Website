"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import products from "@/data/products.json";

export default function ProductDetails() {
  const router = useRouter();
  const params = useParams();

  const { data: session, isPending } = useSession();

  const [authorized, setAuthorized] = useState(false);

  // Auth Check
  useEffect(() => {
    if (isPending) return;

    if (!session?.user) {
      router.push(`/login?redirect=/product/${params.id}`);
    } else {
      setAuthorized(true);
    }
  }, [session, isPending, params.id, router]);

  // Loading
  if (isPending || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Checking authentication...
        </p>
      </div>
    );
  }

  // Find Product
  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  // 404
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold text-red-500">
          404 Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-5 md:p-10">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div className="w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/400x300";
              }}
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between h-full">

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                {product.name}
              </h1>

              <p className="text-gray-500 mb-2">
                Brand: {product.brand}
              </p>

              <p className="text-yellow-500 text-lg mb-2">
                ⭐ {product.rating}
              </p>

              <p className="text-2xl font-bold text-orange-500 mb-4">
                ${product.price}
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {product.description}
              </p>

              <p className="text-sm text-gray-600">
                Stock: {product.stock}
              </p>

              <p className="text-sm text-gray-600">
                Category: {product.category}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">

              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                🛒 Add to Cart
              </button>

              <button
                onClick={() => router.back()}
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                🔙 Back
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}