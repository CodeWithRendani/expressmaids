"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.replace("/login");
    router.refresh();
  }

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">
      <h2 className="text-xl font-semibold">
        Admin Dashboard
      </h2>

      <button
        onClick={logout}
        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
      >
        Logout
      </button>
    </header>
  );
}