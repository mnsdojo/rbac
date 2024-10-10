import { auth, signOut } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import SignInButton from "./sign-in-button";

import SignOutButton from "./me/sign-out-button";
import { redirect } from "next/navigation";

const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 bg-neutral-50 px-4 py-3 flex items-center justify-between">
      <div>
        <h1>RBAC</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/me">Me</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/protected">Protected</Link>
      </div>
    </div>
  );
};
async function Page() {
  const user = await auth();

  return (
    <div className="min-h-dvh ">
      <Navbar />
      <div className="container mx-auto px-8 py-24">
        <h1 className="text-3xl font-semibold">RBAC</h1>
        <p className="text-lg">
          Simple App to demonstrate RBAC with NextAuth.js and Drizzle ORM
        </p>
        <div className="mt-8">
          {!user ? (
            <SignInButton
              signIn={async () => {
                "use server";
                redirect("/api/auth/signin?callbackUrl=/");
              }}
            />
          ) : (
            <SignOutButton
              signOut={async () => {
                "use server";
                await signOut();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
