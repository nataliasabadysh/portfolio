import Image from "next/image";

import styles from "./styles.module.css";
import { SocialMedia } from "../components/socialmedia";

export const metadata = {
  title: "Natalia Sabadysh - Software Engineer",
  description:
    "Natalia Sabadysh's personal blog about software engineering, UI/UX design, and life experiences.",
};

const Section = ({ title, children, subtitle, component }) => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.section__header} ${styles.left}`}>
        {title && <h2>{title}</h2>}
        {component}
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className={styles.right}>{children}</div>
    </section>
  );
};

export default function Blog() {
  return (
    <div className="block">
      <Section
        title=""
        component={
          <Image
            src={"/photo.webp"}
            alt="Natalia Sabadysh personal photo"
            height={150}
            className={styles.img}
            width={150}
            sizes="20vw"
            priority
          />
        }
      >
        <h1 className={styles.title}>Hi! I am Natalia.</h1>
        <h2> Software Engineer</h2>
        <p className={styles.paragraph}>
          I am a big fan of
          <mark>React, Next.js, TypeScript, GraphQL, SQL, FIGMA UI design</mark>
        </p>
        <p>
          I help solve business problems through modern custom web applications.
        </p>
        <div style={{ paddingBottom: 20 }} />
        <p>
          I am originally from Ukraine, living in Vancouver, BC, Canada. I legal
          authorized to work in Canada (no visa sponsorship required). 🇨🇦
        </p>
      </Section>

      <Section
        title="My Biggest Passion"
        subtitle="Making this world a better place"
      >
        <p className={styles.paragraph}>
          <span className={styles.paragraph}>
            I’m driven by a desire to leave a positive impact on the world.
          </span>
          I have built applications from end-to-end MVPs as an independent
          developer to outsourcing, where I build SaaS, government internal
          products, and banking industries.
        </p>
        <p>
          My diverse experiences have molded me into a holistic Software
          Engineer. Committed to continuous growth, I’m driven by a desire to
          leave a positive impact on the world.
        </p>
        <p>
          Beyond addressing business needs, I’m dedicated to staying updated
          with emerging technologies, improving code bases as I learn from
          mistakes, grow through experiences, and gain insight from top
          developers in our industry!
        </p>
      </Section>

      <Section title="UI/UX Design background">
        <p className={styles.paragraph}>
          I believe that the more I grow, the more I need to broaden my skills.
        </p>
        <p>
          I am a very visual person and self-motivated. I understand the process
          behind designs and user experience. I just finished a UI/UX course to
          enhance my understanding of strategy and standards, layouts, and
          concepts in building end-to-end websites and to collaborate with
          others. It helped me to design not just UI content but also the
          application's core in a high-quality and maintainable way.{" "}
          <span className={styles.paragraph}>
            I build aplication scalable with Design System approach.
          </span>{" "}
        </p>
      </Section>

      <Section title="Collaboration && Mentoring">
        <p className={styles.paragraph}>
          I’m driven by a desire to leave a positive impact on the world.
        </p>
        <p>
          My diverse experiences have molded me into a holistic Software
          Engineer. Committed to continuous growth, I’m driven by a desire to
          leave a positive impact on the world.
        </p>
        <p>
          Beyond addressing business needs, I’m dedicated to staying updated
          with emerging technologies, improving code bases as I learn from
          mistakes, grow through experiences, and gain insight from top
          developers in our industry!
        </p>
        <p className={styles.paragraph}>
          I have built applications from end-to-end MVPs as an independent
          developer{" "}
        </p>
        <p>
          and I have contrebuted with outsourcing, where I build SaaS,
          government internal products, and banking industries.
        </p>
        <p className={styles.paragraph}>
          I'm an optimistic, enthusiastic, and hard-working person waiting to
          see what the future holds for my career.
        </p>
      </Section>

      <Section title="What I Do After Work">
        <p className={styles.paragraph}>In my free time, you can find me: </p>
        <b>
          Diving, snowboarding, painting, making video, volunteering or cycling
          around Stanley park.{" "}
        </b>
        I am proactive both at home and at work. I am a lifelong learner.
        exploring the world and curious about life.
        <Image src={"/images/about.png"} alt="about" width={1200} height={32} />
      </Section>
      <Section title="Lifelong learning ">
        <p>
          Right now, I am very curious about how the world is changing with AI
          and all the tools that are coming up in the digital industry.
        </p>
        <p className={styles.paragraph}>
          I am currently learning SQL, Data Structures, and Algorithms with
          Python.
        </p>
        <p> I want to develop my skills as a Data Engineer.</p>
      </Section>

      <Section title="">
        <p>
          Overall I am excited to grow through new experiences! My passion for
          technology and desire to make the world a better place drives me to
          continue learning. Life is a feeling process and a journey to achieve
          all that you want on the way!
        </p>

        <p>
          I hope to influence your journey towards achieving anything you want.
          I truly believe you are the executive of your life.
        </p>

        <p>Best wishes,</p>

        <p>Natalia Sabadys </p>
      </Section>
    </div>
  );
}
