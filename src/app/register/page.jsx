"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Register with Email/Password (LocalStorage)
  const handleRegister = () => {
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required ❌");
      return;
    }

    const userData = { name, email, photo, password };

    // save user
    localStorage.setItem("userData", JSON.stringify(userData));

    // success → login page
    router.push("/login");
  };

  // 🔥 Google Register/Login
  const handleGoogleRegister = async () => {
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

      router.push("/");
    } catch (error) {
      console.error(error);
      setError("Google Register Failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="p-6 rounded-xl w-80 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Register
        </h2>

        {/* Name */}
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300 outline-none"
        />

        {/* Email */}
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300 outline-none"
        />

        {/* Photo */}
        <input
          placeholder="Photo URL"
          onChange={(e) => setPhoto(e.target.value)}
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

        {/* ✅ FIXED BUTTON */}
        <button
          onClick={handleRegister}
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="mt-3 text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400">
            Login
          </Link>
        </p>

        {/* Google Button */}
        <button
          onClick={handleGoogleRegister}
          className="mt-3 w-full border border-white/30 p-2 rounded hover:bg-white/10 transition"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}