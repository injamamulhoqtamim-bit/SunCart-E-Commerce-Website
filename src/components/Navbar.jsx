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
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 text-white flex justify-between items-center shadow-lg">
      
      {/* Logo */}
      <Link href="/">
        <h1 className="font-bold text-xl cursor-pointer hover:text-orange-400 transition">
          SunCart
        </h1>
      </Link>

      <div className="flex items-center space-x-5">
        
        <Link href="/" className="hover:text-orange-400 transition">
          Home
        </Link>

        <Link href="/product" className="hover:text-orange-400 transition">
          Products
        </Link>

        <Link href="/my-profile" className="hover:text-orange-400 transition">
          My Profile
        </Link>

        {user ? (
          <>
            <span className="hidden md:block text-gray-300">
              {user.name}
            </span>

            <img
              src={user?.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
              onError={(e) => {
                e.currentTarget.src = "https://i.ibb.co/4pDNDk1/avatar.png";
              }}
              className="w-9 h-9 rounded-full border-2 border-orange-400"
            />

            <button
              onClick={handleLogout}
              className="bg-orange-500 px-3 py-1 rounded hover:bg-orange-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-orange-400 transition">
              Login
            </Link>

            <Link href="/register" className="bg-orange-500 px-3 py-1 rounded hover:bg-orange-600 transition">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}