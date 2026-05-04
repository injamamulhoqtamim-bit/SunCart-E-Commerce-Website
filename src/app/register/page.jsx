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

  const handleRegister = () => {
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required ❌");
      return;
    }

    // ✅ FIX: photo validation + fallback
    const userData = {
      name,
      email,
      photo:
        photo && photo.startsWith("http")
          ? photo
          : "https://i.ibb.co/4pDNDk1/avatar.png",
      password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    router.push("/login");
  };

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

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300"
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300"
        />

        <input
          placeholder="Photo URL"
          onChange={(e) => setPhoto(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border border-white/30 bg-transparent rounded text-white placeholder-gray-300"
        />

        {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

        <button
          onClick={handleRegister}
          className="w-full bg-orange-500 p-2 rounded hover:bg-orange-600"
        >
          Register
        </button>

        <p className="mt-3 text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400">
            Login
          </Link>
        </p>

        <button
          onClick={handleGoogleRegister}
          className="mt-3 w-full border border-white/30 p-2 rounded hover:bg-white/10"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}