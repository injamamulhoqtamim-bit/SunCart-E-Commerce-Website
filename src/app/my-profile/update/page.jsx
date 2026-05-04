"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  //  load current user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.push("/login");
    } else {
      setName(user.name || "");
      setPhoto(user.photo || "");
    }
  }, [router]);

  const handleUpdate = () => {
    setError("");

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("User not found ");
      return;
    }

    const updatedUser = {
      ...user,
      name: name || user.name,
      photo:
        photo && photo.startsWith("http")
          ? photo
          : user.photo || "https://i.ibb.co/4pDNDk1/avatar.png",
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile Updated ");
    router.push("/my-profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Update Profile
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="New Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-3 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
        />

        {/* Photo */}
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="w-full mb-3 p-3 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
        />

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Update Information
        </button>

      </div>
    </div>
  );
}