import Link from "next/link";
import styles from "./styles.module.css";
import { MdArrowOutward } from "react-icons/md";

export function BlogList({ content }) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.blog_list}>
        {content.map((item, index) => (
          <li key={index} className={styles.container}>
            {console.log(item.title)}
            <Link href={"/blog/" + item.slug}>

              <div className={styles.blog_item}>
                <h2> {item.title}</h2>
                <p>{item.spoiler}</p>
              </div>
              <div className={styles.icon}>
              <MdArrowOutward />
              </div>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
