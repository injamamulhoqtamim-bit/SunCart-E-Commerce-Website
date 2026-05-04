"use client";

import { Suspense } from "react";
import LoginContent from "./LoginContent";

export default function LoginPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <LoginContent />
    </Suspense>
  );
}