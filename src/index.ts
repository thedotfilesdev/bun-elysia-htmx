import { Elysia } from "elysia";
import { pages } from "./pages";
import staticPlugin from "@elysiajs/static";
import { env } from "./config/env";

const app = new Elysia()
  .use(staticPlugin())
  .use(pages)
  .listen(env.APP_PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
