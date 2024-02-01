"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.css";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className="block">
        <nav className={styles.nav}>
          <Link href="/">
            <p className={styles.navLink}>natalia</p>
          </Link>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                <p
                  className={`${styles.navLink} ${pathname === "/" ? "active" : ""}`}
                >
                  home
                </p>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">
                <p
                  className={`${styles.navLink} ${pathname === "/blog/" ? "active" : ""}`}
                >
                  blog
                </p>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">
                <p
                  className={`${styles.navLink}  ${pathname === "/about/" ? "active" : ""}`}
                >
                  about
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
