import styles from "./styles.module.css";
import { SocialMedia } from "../socialmedia";
import Image from "next/image";

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
          <h1 className={styles.hero_title}> Hi! I'm Natalia. </h1>
          <p className={styles.hero_subtitle}>
            {" "}
            I'm a software developer based in Vancouver.{" "}
          </p>

          <div className={styles.img}>
            <SocialMedia />
          </div>
        </section>
      </div>
    </section>
  );
};
