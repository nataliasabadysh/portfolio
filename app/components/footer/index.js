import { SocialMedia } from "../socialmedia";
import styles from "./styles.module.css";

const contacts = [
  {
    type: "Email",
    value: "nataliasabadysh@gmail.com",
    href: "mailto:nataliasabadysh@gmail.com",
  },
  {
    type: "Phone",
    value: "+16048410810",
    href: `tel:+16048410810`,
  },
  {
    type: "Address",
    value: "West End Vancouver",
    href: ``,
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={`block ${styles.footer__section}`}>
        <ul className={styles.footer__linkContainer}>
          {contacts.map((contact) => (
            <li className={styles.footer__item} key={contact.type}>
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.value}
                >
                  {contact.value}
                </a>
              ) : (
                <span>{contact.value}</span>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.container}>
          <p>
            Say Hi! Want to have a chat about anything, feel free to contact me
          </p>
          <SocialMedia />
        </div>
      </section>

      <div className={`block ${styles.footer__bottomContainer}`}>
        <span className={styles.footer__copyright}>
          designed & developed with ♥️ by Natalia Sabadysh
        </span>
      </div>
    </footer>
  );
}
