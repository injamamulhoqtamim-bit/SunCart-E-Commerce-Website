"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import products from "@/data/products.json";

export default function ProductDetails() {
  const router = useRouter();
  const params = useParams();

  const [authorized, setAuthorized] = useState(false);

  // 🔐 Auth check
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push(`/login?redirect=/product/${params.id}`);
    } else {
      setAuthorized(true);
    }
  }, [params.id, router]);

  // ⏳ loading
  if (!authorized) {
    return (
      <p className="text-center mt-20 text-white">
        Checking authentication...
      </p>
    );
  }

  // ✅ IMPORTANT FIX
  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  // ❌ Not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-xl text-red-500">
          404 ❌ Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-black p-6">
      <div className="max-w-md w-full border border-white/20 p-5 rounded-xl shadow-lg bg-white/10 backdrop-blur-md text-white">

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-lg"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/300x200";
          }}
        />

        {/* Info */}
        <h1 className="text-2xl font-bold mt-3">
          {product.name}
        </h1>

        <p className="text-gray-300">
          Brand: {product.brand}
        </p>

        <p>⭐ {product.rating}</p>

        <p className="text-orange-400 text-xl font-bold">
          ${product.price}
        </p>

        <p className="mt-3 text-gray-200">
          {product.description}
        </p>

        <p>Stock: {product.stock}</p>

        <p className="text-sm text-gray-400">
          Category: {product.category}
        </p>

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="mt-4 w-full bg-orange-500 py-2 rounded hover:bg-orange-600"
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
}