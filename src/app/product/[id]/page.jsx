"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import products from "@/data/products.json";

export default function ProductDetails() {
  const router = useRouter();
  const params = useParams(); // ✅ FIXED
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      // 🔥 redirect with return url
      router.push(`/login?redirect=/product/${params.id}`);
    } else {
      setAuthorized(true);
    }
  }, [params.id, router]);

  // 🔥 loading state
  if (!authorized) {
    return (
      <p className="p-6 text-center text-white">
        Checking authentication...
      </p>
    );
  }

  // 🔥 find product
  const product = products.find((p) => p.id == params.id);

  // 🔥 safety check
  if (!product) {
    return (
      <p className="p-6 text-red-500 text-center">
        Product not found ❌
      </p>
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
        />

        {/* Info */}
        <h1 className="text-2xl font-bold mt-3">{product.name}</h1>

        <p className="text-gray-300">Brand: {product.brand}</p>

        <p className="mt-1">⭐ {product.rating}</p>

        <p className="text-orange-400 text-xl font-bold">
          ${product.price}
        </p>

        <p className="mt-3 text-gray-200">
          {product.description}
        </p>

        <p className="mt-2">Stock: {product.stock}</p>

        <p className="mt-1 text-sm text-gray-400">
          Category: {product.category}
        </p>

        {/* 🔥 Back button */}
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