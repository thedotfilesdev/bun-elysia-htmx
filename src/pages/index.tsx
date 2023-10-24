import { html } from "@elysiajs/html";
import Elysia from "elysia";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { Todo, Todos } from "./Todos";

const todos = [{ name: 'test' } satisfies Todo]

export const pages = new Elysia()
  .use(html())
  .get('/', () => <HomePage />)
  .get('about', () => <AboutPage />)
  .get('/todos', () => <Todos todos={todos} />)
  .post('/todo', ({ body }): JSX.Element => {
    todos.push({ name: (body as any).todo } satisfies Todo)
    return <Todos todos={todos} />
  });
