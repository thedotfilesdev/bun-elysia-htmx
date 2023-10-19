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
      <body className="h-full">
        <main className="max-w-screen-md mx-auto flex flex-col gap-8">
          <div className="w-full max-w-screen-md mx-auto">
            <header className="w-full flex items-center p-8" hx-boost="true">
              <h1>
                <a href="/" className="btn btn-secondary btn-outline">
                  Hello Bun!
                </a>
              </h1>
              <nav className="ml-auto">
                <a href="/about" className="btn btn-ghost">
                  About
                </a>
              </nav>
            </header>
          </div>
          <section>{children}</section>
          <footer className="text-center mt-auto p-12 text-sm text-base-content/60">
            <p>
              <em>
                Built with{" "}
                <a
                  href="https://bun.sh"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bun
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  TailwindCSS
                </a>{" "}
                and{" "}
                <a
                  href="https://daisyui.com"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  DaisyUI
                </a>
              </em>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
};

export default Layout;
