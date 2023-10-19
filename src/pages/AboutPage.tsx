import Layout from "../components/Layout";

export function AboutPage() {
  const title = "About";
  return (
    <Layout title={title}>
      <p>
        This app was created by{" "}
        <a href="https://danawoodman.com">Dana Woodman</a> as a test bed for
        using Bun's built in HTTP server as well as to test how it would work
        with tools like HTMX and TailwindCSS.
      </p>
    </Layout>
  );
}
