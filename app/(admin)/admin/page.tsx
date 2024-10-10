import { isAdmin } from "@/lib/auth";
import { notFound } from "next/navigation";
import React from "react";

async function Page() {
  const session = await isAdmin();
  if (!session) {
    return (
      <div>
        <p>You're not authorized to view this page!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Hello Admin here</h1>
      <p>You are admin</p>
    </div>
  );
}

export default Page;
