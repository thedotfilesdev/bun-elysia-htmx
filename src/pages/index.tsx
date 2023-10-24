import { html } from "@elysiajs/html";
import Elysia from "elysia";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { Todo, Todos } from "./Todos";
import { buildDbClient } from "../lib/db";
import { todos } from "../drizzle/schema";

export const pages = new Elysia()
  .use(html())
  .get('/', () => <HomePage />)
  .get('about', () => <AboutPage />)
  .get('/todos', async () => {
    const todosResponse = await buildDbClient().query.todos.findMany({ limit: 10 });
    return <Todos todos={todosResponse} />;
  })
  .post('/todo', async ({ body }) => {
    await buildDbClient().insert(todos).values({ name: (body as any).todo });
    const todosResponse = await buildDbClient().query.todos.findMany({ limit: 10 });
    console.log(todosResponse)

    return <Todos todos={todosResponse} />
  });
