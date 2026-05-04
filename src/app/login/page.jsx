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
      
      // ✅ FIX: clean user object with fallback image
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
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="p-6 rounded-xl w-80 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300 outline-none"
        />

        {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 p-2 rounded hover:bg-orange-600"
        >
          Login
        </button>

        <p className="mt-3 text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-400">
            Register
          </Link>
        </p>

        <button
          onClick={handleGoogleLogin}
          className="mt-3 w-full border border-white/30 p-2 rounded hover:bg-white/10"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}