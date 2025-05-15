"use client";

export default function LogoutButton() {
  async function handleLogout() {
    await fetch("/api/admin-logout", { method: "POST" });
    window.location.href = "/"; // full page reload
  }

  return (
    <button
      onClick={handleLogout}
      className="mt-4 bg-red-600 px-3 py-1 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
