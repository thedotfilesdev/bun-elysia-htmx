import { html } from "@elysiajs/html";
import Elysia from "elysia";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";

export const pages = new Elysia()
  .use(html())
  .get('/', () => <HomePage />)
  .get('about', () => <AboutPage />);
