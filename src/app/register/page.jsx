"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";


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
  await signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4">
      
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Register
        </h2>

        {/* Name */}
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-3 border border-white/30 bg-transparent rounded-lg text-white placeholder-gray-300 outline-none focus:border-orange-400"
        />

        {/* Email */}
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 border border-white/30 bg-transparent rounded-lg text-white placeholder-gray-300 outline-none focus:border-orange-400"
        />

        {/* Photo */}
        <input
          placeholder="Photo URL"
          onChange={(e) => setPhoto(e.target.value)}
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

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-400 hover:underline">
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="my-4 text-center text-gray-400 text-sm">
          OR
        </div>

        {/* Google Button */}
       <button
  onClick={handleGoogleRegister}
  className="w-full border py-3 rounded-lg hover:bg-white hover:text-black transition"
>
  Continue with Google
</button>

      </div>
    </div>
  );
}