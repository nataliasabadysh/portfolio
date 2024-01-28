import styles from "./styles.module.css";

const experience = [
  { value: "7+", title: "years in web development" },
  { value: "16", title: "web projects completed" },
  { value: "400+", title: "hours mentoring at IT school" },
  { value: "1 🎉", title: "personal SaaS project" },
];

export const About = () => {
  return (
    <div>
      <ul className={styles.list}>
        {experience.map(({ value, title }) => (
          <li key={value} className={styles.list__item}>
            <span>{value}</span>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
