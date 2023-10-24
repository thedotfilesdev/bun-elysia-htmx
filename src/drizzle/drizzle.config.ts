import type { Config } from "drizzle-kit";
import { env } from "../config/env";

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  driver: "turso",
  dbCredentials: {
    url: env.TURSO_DB_URL,
    authToken: env.TURSO_DB_AUTH_TOKEN
  },
} satisfies Config;
