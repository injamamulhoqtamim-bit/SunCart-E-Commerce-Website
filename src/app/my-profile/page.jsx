"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  //  Not logged in
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-gray-600 text-lg text-center">
          No user logged in 
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
        
        {/* Profile Image */}
        <img
          src={user.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
          onError={(e) => {
            e.currentTarget.src =
              "https://i.ibb.co/4pDNDk1/avatar.png";
          }}
          className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full mb-4 border-4 border-orange-400 object-cover"
        />

        {/*  Info */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          {user.name}
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mt-1">
          {user.email}
        </p>

        {/*  Update Button */}
        <Link href="/my-profile/update">
          <button className="mt-6 w-full bg-orange-500 py-2 rounded-lg text-white hover:bg-orange-600 transition">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
}