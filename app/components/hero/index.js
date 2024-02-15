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
          <h1 className={styles.hidden}>
            Driven by a passion for Software Developer
          </h1>
          <h2 className={styles.hero_title}>
            Driven by a passion for{" "}
            <span className="h_accent">Software Developer</span>
          </h2>
          <p className={styles.hero_subtitle}>
            Hi! I&apos;m Natalia. Welcome to my web blog, where I share my
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
