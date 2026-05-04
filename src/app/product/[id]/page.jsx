"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import products from "@/data/products.json";

export default function ProductDetails() {
  const router = useRouter();
  const params = useParams();

  const [authorized, setAuthorized] = useState(false);

  //  Auth check
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push(`/login?redirect=/product/${params.id}`);
    } else {
      setAuthorized(true);
    }
  }, [params.id, router]);

  //  Loading
  if (!authorized) {
    return (
      <p className="text-center mt-20 text-gray-400">
        Checking authentication...
      </p>
    );
  }

  //  Find product
  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  //  404
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold text-red-500">
          404 ❌ Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">

        {/*Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 md:h-96 object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/400x300";
              }}
            />
          </div>

          {/*  Details */}
          <div className="flex flex-col justify-between">

            <div>
              <h1 className="text-3xl font-bold mb-2">
                {product.name}
              </h1>

              <p className="text-gray-500 mb-2">
                Brand: {product.brand}
              </p>

              <p className="text-yellow-500 text-lg mb-2">
                ⭐ {product.rating}
              </p>

              <p className="text-2xl font-bold text-orange-500 mb-3">
                ${product.price}
              </p>

              <p className="text-gray-700 mb-4">
                {product.description}
              </p>

              <p className="text-sm text-gray-600">
                Stock: {product.stock}
              </p>

              <p className="text-sm text-gray-600">
                Category: {product.category}
              </p>
            </div>

            {/*  Actions */}
            <div className="mt-6 flex gap-3 flex-col sm:flex-row">

              <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                🛒 Add to Cart
              </button>

              <button
                onClick={() => router.back()}
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                 Back
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}