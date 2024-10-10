import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import Profile from "./profile";
import SignOutButton from "./sign-out-button";

async function Page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/me");
  }

  return (
    <div className="container mx-auto px-8 py-24">
      <Profile user={session.user} />

      <SignOutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      />
    </div>
  );
}

export default Page;
