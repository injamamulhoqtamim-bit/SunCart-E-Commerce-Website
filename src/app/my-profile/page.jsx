"use client";

import Link from "next/link";
import { useSession } from "@/lib/auth-client";

export default function Profile() {
  const { data: session } = useSession();

  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-gray-600 text-lg text-center">
          No user logged in
        </p>
      </div>
    );
  }

  const profileImage =
    user?.image ||
    user?.picture ||
    user?.avatar ||
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.name || "User"
    )}`;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">

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
          className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-orange-400 object-cover"
        />

        <h2 className="text-2xl font-bold text-gray-800">
          {user?.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {user?.email}
        </p>

        <Link href="/my-profile/update">
          <button className="mt-6 w-full bg-orange-500 py-3 rounded-lg text-white hover:bg-orange-600 transition">
            Update Profile
          </button>
        </Link>

      </div>
    </div>
  );
}