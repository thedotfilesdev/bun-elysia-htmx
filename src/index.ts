import { Elysia } from "elysia";
import { pages } from "./pages";
import staticPlugin from "@elysiajs/static";

const app = new Elysia()
  .use(staticPlugin())
  .use(pages)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
