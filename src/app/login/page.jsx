"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      const userData = {
        name: savedUser.name,
        email: savedUser.email,
        photo:
          savedUser.photo && savedUser.photo.startsWith("http")
            ? savedUser.photo
            : "https://i.ibb.co/4pDNDk1/avatar.png",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("authChange"));
      router.push(redirect);
    } else {
      setError("Invalid Email or Password ❌");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      const userData = {
        name: firebaseUser.displayName || "No Name",
        email: firebaseUser.email,
        photo:
          firebaseUser.photoURL &&
          firebaseUser.photoURL.startsWith("http")
            ? firebaseUser.photoURL
            : "https://i.ibb.co/4pDNDk1/avatar.png",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("authChange"));
      router.push(redirect);
    } catch (err) {
      console.error(err);
      setError("Google Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4">

      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 border border-white/30 bg-transparent rounded-lg text-white placeholder-gray-300 outline-none focus:border-orange-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-3 border border-white/30 bg-transparent rounded-lg text-white placeholder-gray-300 outline-none focus:border-orange-400"
        />

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
        >
          Login
        </button>

        {/* Register */}
        <p className="mt-4 text-sm text-center text-gray-300">
          Don’t have an account?{" "}
          <Link href="/register" className="text-orange-400 hover:underline">
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="my-4 text-center text-gray-400 text-sm">
          OR
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border border-white/30 py-3 rounded-lg hover:bg-white/10 transition"
        >
          Continue with Google
        </button>

      </div>
    </div>
  );
}