import Image from "next/image";

import styles from "./styles.module.css";
import { SocialMedia } from "../components/socialmedia";

export const metadata = {
  title: "Natalia Sabadysh - Software Engineer",
  description:
    "Natalia Sabadysh's personal blog about software engineering, UI/UX design, and life experiences."
};

const softSkills = [
  "Communication",
  "Conflict Resolution",
  "Critical Thinking",
  "Emotional Intelligence",
  "Empathy",
  "Analytical Skills",
  "Willingness to Learn",
  "Planning",
  "Self-motivation",
  "Accountability",
  "Organisation",
  "Decision Making",
  "Self-awareness",
  "Mentoring",
  "Functions Well Under Pressure"
];

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
          I am a big fan of MERN tech stack :
          <mark>React, Next.js, TypeScript, GraphQL, SQL, FIGMA UI design</mark>
        </p>
        <p>
          My power and biggest passion lie in building Web/Mobile Web
          Applications, custom web applications that are{" "}
          <b>user-friendly, accessible, fast, responsive, reliable, dynamic </b>
          , and built with modern technology.
        </p>
        <div style={{ paddingBottom: 20 }} />
        <p>
          I am originally from Ukraine, living in Vancouver, BC, Canada. I legal
          authorized to work in Canada (no visa sponsorship required). 🇨🇦
        </p>
      </Section>

      <Section title="My Biggest Passion" subtitle="Making businesses better">
        <span className={styles.paragraph}>
          What does it mean to be a Senior Web Developer ?
        </span>
        <p>
          I got my first Senior position after a year of working with React in
          2019, because I am eager and really good at logical structuring on the
          client side and creating reusable, scalable, safe, and reliable
          applications, able to estimate and deliver on time.
        </p>

        <br />
        <p>
          Today, after a year of working, my passion still lies in UI Web
          Development. But now, it's in a way where I'm more about collaborating
          with businesses and having an impact, with a strong focus on business,
          strategy, value, and missions.
        </p>
      </Section>

      <Section
        title="My interests"
        subtitle="Deliver goals to businesses that need innovation and make changes today."
      >
        <br />
        <span className={styles.paragraph}>
          Being as a Senior Web Developer I learned how to develop with a wide
          vision of the company and strategy, such as:
        </span>
        <ul>
          <li key={1}> - Business and its problems</li>
          <li key={2}> - Understanding what we are building</li>{" "}
          <li key={3}> - Clear product vision</li>{" "}
          <li key={4}> - Knowing the actual problems businesses face</li>{" "}
          <li key={5}> - Aligning with the business vision</li>
        </ul>
        <br />
        <p>
          I am a team player and can also work independently, with
          self-motivation and proactivity.
        </p>
      </Section>

      <section className={`${styles.section} ${styles.skills}`}>
        <div className={`${styles.section__header} ${styles.left}`}>
          <h2>Contributions and Skills</h2>
          <p>My day-to-day looks like this, and my capabilities:</p>
        </div>
        <div className={styles.right}>
          <ul className={styles.skillsList}>
            <li>
              I am eager to take on projects, continue building new features,
              and maintain and support existing applications. Build feature
              end-to-end, work as independent responsible developer or with a
              team, and share all features togethers.
            </li>
            <li>
              I am enthusiastic about building brand-new applications from
              scratch, adhering to best practices such as testing, type safety,
              consistency, reusability, and ease of understanding. I focus on
              safe rendering, error handling for all possible cases,
              accessibility, and responsiveness.
            </li>
            <li>
              I can configure and set up any Web Development tool and set up the
              environment for deployment processes. If there is something I
              don't yet have experience with, I can quickly adjust and learn
              from documentation.
            </li>
            <li>
              I am conformable to help designing UI ad features and interviewing
              users to ensure that our application is easy, understandable to
              use and meets its targets.
            </li>
            <li>
              I can mentor junior positions by sharing patterns, functions, and
              code that we already use, explaining the cases and practices, and
              demonstrating the benefits. This helps them catch up, contribute
              to the process, and learn through open communication, and other
              capabilities
            </li>
          </ul>
          <p>
            I believe that nothing is impossible if we try and work on it - we
            will make it happen.
          </p>
        </div>
      </section>

      <Section title="Collaboration">
        <p style={{ paddingBottom: 40 }}>
          Delivery ad progress of developing most of the time can depend on the
          collaboration with others, like: UI and UX designers, Product
          Managers, and Stakeholders, Users, and more. As a developer, we don’t
          just code. Embracing higher responsibilities and making critical
          decisions are part of our role. I enjoy work with profecinals. I
          believe that teamwork, collaboration, shared goals, and proactivity
          are what inspire not just me but everyone else and drive us towards
          results.
        </p>
        <ul className={styles.listTags}>
          {softSkills.map((skill, index) => (
            <li className={styles.listTagItem} key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What I Do After Work">
        <b>
          After moving to Canada, I started to do in more outdoor activities:
          <p className={styles.paragraph}>
            {" "}
            In my free time, you can find me:{" "}
          </p>
          Diving, snowboarding, painting, making video, volunteering or cycling
          around Stanley park.
        </b>
        When Before I have traveled a lot in Europe. I am proactive both at home
        and at work. I am a lifelong learner. exploring the world and curious
        about life.
        <Image src={"/images/about.png"} alt="about" width={1200} height={32} />
      </Section>
      <Section title="Lifelong learning ">
        <p>
          Right now, I am very curious about how the world is changing with AI
          and how it helps in different industries.
        </p>
        <p className={styles.paragraph}>
          I am currently learning SQL, Data Structures, and Algorithms with
          Python.
        </p>
        <p> I want to develop my skills as a Data Engineer.</p>
      </Section>

      <Section title="">
        <p style={{ paddingBottom: 40 }}>
          Overall I am excited to grow through new experiences.
        </p>

        <p>Best wishes,</p>

        <p>Natalia Sabadys </p>
      </Section>
    </div>
  );
}
