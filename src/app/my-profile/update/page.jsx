"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleUpdate = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const updatedUser = {
      ...user,
      name: name || user.name,
      photo: photo || user.photo,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile Updated!");
    router.push("/my-profile");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded w-80">
        <h2 className="text-xl font-bold mb-4">Update Profile</h2>

        <input
          type="text"
          placeholder="New Name"
          className="w-full mb-2 p-2 border"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="New Photo URL"
          className="w-full mb-2 p-2 border"
          onChange={(e) => setPhoto(e.target.value)}
        />

        <button
          onClick={handleUpdate}
          className="w-full bg-orange-400 text-white p-2"
        >
          Update
        </button>
      </div>
    </div>
  );
}