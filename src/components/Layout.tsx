const Layout = ({ title, children }: { title: string, children: JSX.Element }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {/* TODO: change to npm pkg */}
        <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>

        <link rel="stylesheet" href="/public/tailwind.css" />
      </head>
      <body class="h-full">
        <main class="max-w-screen-md mx-auto flex flex-col gap-8">
          <div class="w-full max-w-screen-md mx-auto">
            <header class="w-full flex items-center p-8" hx-boost="true">
              <h1>
                <a href="/" class="btn btn-secondary btn-outline">
                  Hello Bun!
                </a>
              </h1>
              <nav class="ml-auto">
                <a href="/about" class="btn btn-ghost">
                  About
                </a>
              </nav>
            </header>
          </div>
          <section>{children}</section>
          <footer class="text-center mt-auto p-12 text-sm text-base-content/60">
            {/* TODO: add footer */}
          </footer>
        </main>
      </body>
    </html>
  );
};

export default Layout;
