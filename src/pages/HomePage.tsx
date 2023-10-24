import Layout from "../components/Layout";

export function HomePage() {
  const title = "Hello Bun!";
  return (
    <Layout title={title}>
      <div class="flex flex-col gap-8">
        <p class="text-lg">
          This is an example of a Bun and it's built in HTTP server app using
          TailwindCSS and DaisyUI.
        </p>
        <nav class="flex flex-col items-center gap-6 mx-auto">
          <a
            href="https://github.com/danawoodman/bun-htmx"
            target="_blank"
            rel="noreferrer"
            class="btn btn-primary"
          >
            Check Out the Code on GitHub
          </a>
          <a href="/about" class="btn btn-ghost" hx-boost="true">
            About
          </a>
        </nav>

        <section class="max-w-md mx-auto flex flex-col gap-4 p-8">
          <form hx-post="/todo" hx-target="#todos">
            <fieldset class="flex flex-col pb-4">
              <label class="label">
                <span class="label-text">What is your name?</span>
              </label>
              <input type="text" name="todo" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </fieldset>

            <button type="submit" class="btn">Submit</button>

            {/* <img id="indicator" class="htmx-indicator" src="/loading.gif" /> */}
          </form>

          <section id="todos" hx-get="/todos" hx-trigger="load"></section>
        </section>
      </div>
    </Layout>
  );
}
