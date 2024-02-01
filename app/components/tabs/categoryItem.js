"use client";
import { MdOutlineArrowOutward } from "react-icons/md";
import styles from "./styles.module.css";

export const ResourceList = ({ resources }) => {
  const titleJsx = <span className={styles.title}>{resources.category}</span>;
  return (
    <div className={styles.resourceList}>
      {titleJsx}
      <ul>
        {resources.resources?.map((resource, resourceIndex) => (
          <li key={resourceIndex}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.links}
            >
              {resource.name} <MdOutlineArrowOutward />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
