import Link from "next/link";

export default function NotFound() {
  return (
    <article className="markdown">
      <h1>Page Not Found</h1>
      <div className="markdown mt-10">
        <p>
          Sorry, the page you are looking for doesn&apos;t exist or it may have been
          moved.
        </p>
        <p>
          If you believe this is an error or need assistance, feel free to{" "}
          <Link href="https://github.com/nataliasabadysh">
            <span className="highlighted-link">
              <mark>contact me on GitHub</mark>
            </span>
          </Link>
          .
        </p>
        <p>
          or, you can{" "}
          <Link href="/" className="highlighted-link">
            <mark>return to the homepage</mark>
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
