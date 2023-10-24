import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/http";
import * as schema from "../drizzle/schema";
import { env } from "../config/env";


export function buildDbClient() {
  const url = env.TURSO_DB_URL?.trim();
  const authToken = env.TURSO_DB_AUTH_TOKEN?.trim();

  return drizzle(createClient({ url, authToken }), { schema });
}
