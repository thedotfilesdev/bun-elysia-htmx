import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { env } from "../src/config/env";
import { todos } from "../src/db/schema";

const client = createClient({
  url: env.TURSO_DB_URL as string,
  authToken: env.TURSO_DB_AUTH_TOKEN as string,
});

const db = drizzle(client);

type NewTodo = typeof todos.$inferInsert;

async function seed() {
  const todosData: NewTodo[] = [
    {
      name: "Cleanup the living room",
    },
    {
      name: "Buy new mouse",
    },
    {
      name: "Fix nvim setup",
    },
  ];

  const storedProducts = await db
    .insert(todos)
    .values(todosData)
    .returning()
    .all();

  console.log("Inserted ", storedProducts.length, " todos!");

  process.exit(0);
}

seed();
