import { drizzle } from "drizzle-orm/postgres-js";
import { config } from "dotenv";
import postgres from "postgres";
import * as schema from "./schema";

config({ path: ".env.local" });

const queryClient = postgres(process.env.DATABASE_URL!);

declare global {
  var _db: ReturnType<typeof drizzle<typeof schema>> | undefined;
}

const db = globalThis._db || drizzle(queryClient, { schema, logger: true });

if (process.env.NODE_ENV !== "production") {
  globalThis._db = db;
}

export { db };
export type DB = typeof db;
