"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  if (!user) return <p className="text-center mt-10">No user logged in</p>;

  return (
    <div className="flex flex-col items-center mt-10 text-white">
      
      {/* Profile Image */}
      <img
        src={user.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
        onError={(e) => {
          e.target.src = "https://i.ibb.co/4pDNDk1/avatar.png";
        }}
        className="w-24 h-24 rounded-full mb-4 border"
      />

      {/* Info */}
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.email}</p>

      {/* 🔥 UPDATE BUTTON (IMPORTANT) */}
      <Link href="/my-profile/update">
        <button className="mt-4 bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-600">
          Update Profile
        </button>
      </Link>
    </div>
  );
}