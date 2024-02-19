"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { MdArrowOutward } from "react-icons/md";
import AnimationLoyalty from "../animation";

export function BlogList({ content }) {
  return (
    <AnimationLoyalty>
      <div className={styles.wrapper}>
        <ul className={styles.blog_list}>
          {content.map((item, index) => (
            <li key={index} className={styles.container}>
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
    </AnimationLoyalty>
  );
}
