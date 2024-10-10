import NextAuth from "next-auth";

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";

import authConfig from "./auth.config";

export const { handlers, auth, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  ...authConfig,
  session: {
    strategy: "jwt",
  },
});

export const isAdmin = async () => {
  const session = await auth();
  if (!session?.user) {
    return false;
  }
  return session.user.role === "admin";
};
