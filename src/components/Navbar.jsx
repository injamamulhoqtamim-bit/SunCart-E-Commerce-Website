"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const loggedUser = localStorage.getItem("user");
      setUser(loggedUser ? JSON.parse(loggedUser) : null);
    };

    checkUser();

    window.addEventListener("authChange", checkUser);

    return () => {
      window.removeEventListener("authChange", checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange"));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-blue-400 p-4 text-white flex justify-between items-center shadow-md">
      
      {/* 🔥 Logo → Home */}
      <Link href="/">
        <h1 className="font-bold text-lg cursor-pointer">
          SunCart
        </h1>
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/product">Products</Link>
        <Link href="/my-profile">My Profile</Link>

        {user ? (
          <>
            <span className="hidden md:block">{user.name}</span>

            <img
              src={user.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
              onError={(e) => {
                e.target.src =
                  "https://i.ibb.co/4pDNDk1/avatar.png";
              }}
              className="w-8 h-8 rounded-full border"
            />

            <button
              onClick={handleLogout}
              className="bg-black px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}