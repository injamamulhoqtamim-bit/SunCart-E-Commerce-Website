"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  useSession,
  signOut,
} from "@/lib/auth-client";

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [localUser, setLocalUser] =
    useState(null);

  const { data: session } = useSession();

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    setLocalUser(user);

    const syncAuth = () => {
      const updatedUser = JSON.parse(
        localStorage.getItem("user")
      );

      setLocalUser(updatedUser);
    };

    window.addEventListener(
      "authChange",
      syncAuth
    );

    return () => {
      window.removeEventListener(
        "authChange",
        syncAuth
      );
    };
  }, []);

  const user = session?.user || localUser;

  const profileImage =
    user?.image ||
    user?.picture ||
    user?.avatar ||
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.name || "User"
    )}`;

  const handleLogout = async () => {
    localStorage.removeItem("user");

    await signOut();

    window.dispatchEvent(
      new Event("authChange")
    );

    setMenuOpen(false);

    window.location.href = "/";
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 text-white shadow-lg">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-2xl cursor-pointer hover:text-orange-400 transition">
            SunCart
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5">

          <Link
            href="/"
            className="hover:text-orange-400 transition"
          >
            Home
          </Link>

          <Link
            href="/product"
            className="hover:text-orange-400 transition"
          >
            Products
          </Link>

          <Link
            href="/my-profile"
            className="hover:text-orange-400 transition"
          >
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
                className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hover:text-orange-400 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-800 p-5 rounded-xl shadow-lg">

          <Link
            href="/"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-orange-400 transition"
          >
            Home
          </Link>

          <Link
            href="/product"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-orange-400 transition"
          >
            Products
          </Link>

          <Link
            href="/my-profile"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-orange-400 transition"
          >
            My Profile
          </Link>

          {user ? (
            <>
              <div className="flex items-center gap-3">

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
                  className="w-12 h-12 rounded-full border-2 border-orange-400 object-cover"
                />

                <span className="text-gray-300">
                  {user?.name}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="hover:text-orange-400 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="bg-orange-500 px-4 py-2 rounded text-center hover:bg-orange-600 transition"
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