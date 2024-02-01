import styles from "./styles.module.css";
import { SocialMedia } from "../socialmedia";
import Image from "next/image";

const experience = [
  { value: "7+ ", title: "years in web development" },
  //{ value: "16", title: "web projects completed" },
  { value: "400+", title: "hours mentoring at IT school" },
  // { value: "1 🎉", title: "personal SaaS project" },
];

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_container + " " + styles.left}>
        <section>
          <h1 className={styles.hero_title}>
            Driven by a passion for <mark> Software Developer</mark>
          </h1>
          <p className={styles.hero_subtitle}>
            Hi! I&apos;m Natalia. Welcome to my portfolio, where I share my
            experience and help you build modern web applications.
          </p>
        </section>

        <div className={styles.hero_container + " " + styles.right}>
          <div className={styles.image}>
            <Image
              src={"/nata.png"}
              alt="Natalia Sabadysh personal photo"
              height={350}
              width={350}
              sizes="33vw"
              priority
            />
          </div>
        </div>
        <div className={styles.media}>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};
