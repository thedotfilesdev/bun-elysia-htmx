import { z } from "zod";

let envSchema = z.object({
  APP_NAME: z.string(),
  APP_PORT: z.string().default("3000"),
  TURSO_DB_URL: z.string(),
  TURSO_DB_AUTH_TOKEN: z.string(),
});

export const env = envSchema.parse(process.env);
