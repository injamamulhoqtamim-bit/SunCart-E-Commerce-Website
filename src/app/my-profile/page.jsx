// src/app/my-profile/page.jsx

"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  if (!user) return <p className="text-center mt-10">No user logged in</p>;

  return (
    <div className="flex flex-col items-center mt-10">
      <img
  src={user.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
  onError={(e) => {
    e.target.src = "https://i.ibb.co/4pDNDk1/avatar.png";
  }}
  className="w-24 h-24 rounded-full mb-4 border"
/>
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}