import { list } from "./icons";
import styles from "./styles.module.css";

export const SocialMedia = () => {
  return (
    <ul className={styles.container}>
      {list.map(({ icon: Component, name, href }) => (
        <li key={name} className={styles.link}>
          <a href={href}>
            <Component />
            <p>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};
