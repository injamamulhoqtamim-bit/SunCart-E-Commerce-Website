"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";


export default function LoginContent() {
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
  await signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4">
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 border border-white/30 bg-transparent rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-3 border border-white/30 bg-transparent rounded-lg"
        />

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

       <button
  onClick={handleGoogleLogin}
  className="w-full border border-white/20 py-3 rounded-lg hover:bg-white hover:text-black transition"
>
  Continue with Google
</button>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-orange-400">
            Register
          </Link>
        </p>

        <div className="my-4 text-center text-gray-400 text-sm">
          OR
        </div>

        <button
  className="w-full border border-white/20 py-3 rounded-lg opacity-50 cursor-not-allowed"
>
  Google Login Coming Soon
</button>

      </div>
    </div>
  );
}