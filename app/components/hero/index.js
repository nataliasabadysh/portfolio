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
        <div className={styles.image}>
          <Image
            src={"/photo.webp"}
            alt="Natalia Sabadysh personal photo"
            height={250}
            width={250}
            sizes="33vw"
            priority
          />
        </div>
      </div>

      <div className={styles.hero_container + " " + styles.right}>
        <section>
          <h1 className={styles.hero_title}> Hi! I&apos;m Natalia. </h1>
          <p className={styles.hero_subtitle}>
            I&apos;m a Software Developer based in Vancouver.{" "}
          </p>
          <div>
            <SocialMedia />
          </div>
        </section>
      </div>
    </section>
  );
};
