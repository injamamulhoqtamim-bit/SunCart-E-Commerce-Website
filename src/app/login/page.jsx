"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 🔥 get redirect path (better way)
  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 Email/Password Login
  const handleLogin = () => {
    setError("");

    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("user", JSON.stringify(savedUser));

      window.dispatchEvent(new Event("authChange"));

      // ✅ redirect back
      router.push(redirect);
    } else {
      setError("Invalid Email or Password ❌");
    }
  };

  // 🔥 Google Login
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

      // ✅ redirect back
      router.push(redirect);
    } catch (err) {
      console.error(err);
      setError("Google Login Failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="p-6 rounded-xl w-80 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
        
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login 
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300 outline-none"
        />

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mb-2">{error}</p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="mt-3 text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-400">
            Register
          </Link>
        </p>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="mt-3 w-full border border-white/30 p-2 rounded hover:bg-white/10 transition"
        >
          Continue with Google 
        </button>
      </div>
    </div>
  );
}