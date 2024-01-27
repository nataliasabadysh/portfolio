import Link from "next/link";
import styles from "./styles.module.css";

const cvURL = "https://nataliadeveloper.vercel.app/";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <p className={styles.navLink}>Home</p>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/work">
              <p className={styles.navLink}>Work</p>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog">
              <p className={styles.navLink}>Blog</p>
            </Link>
          </li>
        </ul>

        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              href={cvURL}
              className={styles.cvButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
