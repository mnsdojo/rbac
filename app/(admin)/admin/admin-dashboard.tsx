"use client";

import { signOut } from "next-auth/react";

export default function AdminDashboard({ user }: { user: any }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      <div className="mt-4">
        {/* Add your admin-specific content here */}
        <p>This is the admin-only area.</p>
      </div>
      <button
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}
