"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Nav() {
  const { data: session, status } = useSession();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          RBAC
        </Link>
        <div>
          <Link className="mr-2" href="/protected">
            Protected
          </Link>
          {status === "authenticated" ? (
            <>
              <span className="mr-4">Hello, {session.user?.name}</span>
              {session.user?.role === "admin" && (
                <Link href="/admin" className="mr-4">
                  Admin
                </Link>
              )}
              <button onClick={() => signOut()} className="text-white">
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login">Sign In</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
