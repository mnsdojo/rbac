import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
export const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        const dbUser = await db
          .select()
          .from(users)
          .where(eq(users.id, user.id))
          .execute();
        session.user.role = dbUser[0].role || "user";
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !auth?.user;
      const isAdmin = nextUrl.pathname.startsWith("/admin");
      const isProtected = nextUrl.pathname.startsWith("/protected");
      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("api/auth/signin", nextUrl.origin);
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href);
        return Response.redirect(redirectUrl);
      }

      if (isAdmin && auth?.user?.role !== "admin") {
        return Response.redirect(new URL("/unauthoized", nextUrl.origin));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signOut } = NextAuth(authConfig);

export const isAdmin = async () => {
  const session = await auth();
  if (!session?.user) {
    return false;
  }
  return session.user.role === "admin";
};
