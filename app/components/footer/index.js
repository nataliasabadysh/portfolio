import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with{" "}
        <span role="img" aria-label="love">
          💙
        </span>{" "}
        in Canada using Next.js, Vercel, and CSS Modules.
      </p>
      <p>
        <a
          href="/"
          className={styles.sourceLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </p>
    </footer>
  );
};
