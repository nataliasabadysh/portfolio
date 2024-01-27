import styles from "./styles.module.css";

const experience = [
  { value: "7+", title: "Years in Web Development" },
  { value: "16", title: "Web Projects Completed" },
  { value: "400+", title: "Hours Mentoring at IT School" },
  { value: "1 🎉", title: "Personal SaaS Project" },
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
