import { migrate } from "drizzle-orm/libsql/migrator";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "../config/env";




export const client = createClient({
  url: env.TURSO_DB_URL,
  authToken: env.TURSO_DB_AUTH_TOKEN,
});

export const db = drizzle(client);

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: "src/drizzle/migrations",
    });
    console.log("Tables migrated!");
    process.exit(0);
  } catch (error) {
    console.error("Error performing migration: ", error);
    process.exit(1);
  }
}

main();
