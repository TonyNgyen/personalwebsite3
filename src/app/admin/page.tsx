import { cookies } from "next/headers";

export default function AdminPage() {
  // Since middleware protects this page, user is admin

  async function logout() {
    await fetch("/api/admin-logout", { method: "POST" });
    // Note: can't redirect client from server component — this will be handled client side in real case
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, admin!</p>

      {/* Ideally implement logout button in a client component */}
    </div>
  );
}
