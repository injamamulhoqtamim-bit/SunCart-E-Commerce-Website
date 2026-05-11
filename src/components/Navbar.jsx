"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session } = useSession();

  const user = session?.user;

  // image detect
  const profileImage =
    user?.image ||
    user?.picture ||
    user?.avatar ||
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.name || "User"
    )}`;

  const handleLogout = async () => {
    await signOut();
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 text-white shadow-lg">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-xl cursor-pointer hover:text-orange-400 transition">
            SunCart
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5">

          <Link href="/" className="hover:text-orange-400">
            Home
          </Link>

          <Link href="/product" className="hover:text-orange-400">
            Products
          </Link>

          <Link href="/my-profile" className="hover:text-orange-400">
            My Profile
          </Link>

          {user ? (
            <>
              <span className="text-gray-300">
                {user?.name}
              </span>

              <img
                src={profileImage}
                alt="Profile"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user?.name || "User"
                    )}`;
                }}
                className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover"
              />

              <button
                onClick={handleLogout}
                className="bg-orange-500 px-3 py-1 rounded hover:bg-orange-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>

              <Link
                href="/register"
                className="bg-orange-500 px-3 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-3 md:hidden bg-gray-900 p-4 rounded-lg">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/product" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          <Link href="/my-profile" onClick={() => setMenuOpen(false)}>
            My Profile
          </Link>

          {user ? (
            <>
              <span>{user?.name}</span>

              <img
                src={profileImage}
                alt="Profile"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user?.name || "User"
                    )}`;
                }}
                className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover"
              />

              <button
                onClick={handleLogout}
                className="bg-orange-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-orange-500 px-3 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}