import Layout from "../components/Layout";

export function HomePage() {
  const title = "Hello Bun!";
  return (
    <Layout title={title}>
      <div class="flex flex-col gap-8">
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
