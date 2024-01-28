"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { ResourceList } from "./categoryItem";
import { MdOutlineArrowOutward } from "react-icons/md";

const list = [
  {
    category: "youtube",
    resources: [],
  },
  {
    category: "community",
    resources: [],
  },
  {
    category: "web development",
    resources: [
      { url: "https://codeguide.co/", name: "Code Guide" },
      {
        url: "https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element",
        name: "HTML spec Standard",
      },
      { url: "https://validator.w3.org/nu/", name: "Validator" },
      { url: "https://htmlreference.io/element/a/", name: "htmlreference" },
    ],
  },
  {
    category: "javascript",
    resources: [],
  },
  {
    category: "python",
    resources: [],
  },
  {
    category: "sql",
    resources: [],
  },
  {
    category: "typescript",
    resources: [],
  },
  {
    category: "image optimization",
    resources: [
      { url: "https://squoosh.app/", name: "Squoosh" },
      { url: "https://jakearchibald.github.io/svgomg/", name: "SVGOMG" },
    ],
  },
  {
    category: "books",
    resources: [],
  },
  {
    category: "news blog",
    resources: [
      {
        url: "https://www.lifewire.com/software-and-apps-4781541",
        name: "TECH FOR HUMANS",
      },
    ],
  },
];

export const HighlightTabsNav = () => {
  const [expandedCategory, setExpandedCategory] = useState(2);

  const toggleCategory = (index) => {
    if (expandedCategory === index) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(index);
    }
  };

  return (
    <section className={styles.wrapper}>
      <h2>Channels for every developer: </h2>
      <p>
        Where I learn and gettting inspiration. and where I would recommended
        for every developer.
      </p>
      <ul className={styles.highlight_tabs__container}>
        {list.map((categoryItem, index) => {
          const activeTab = expandedCategory === index;

          const stylingActiveTabe = activeTab
            ? styles.highlight_tabs__tab + " " + styles.highlight_tab_active
            : styles.highlight_tabs__tab;
          return (
            <li key={index}>
              <button
                className={stylingActiveTabe}
                onClick={() => toggleCategory(index)}
              >
                {categoryItem.category}
              </button>
              {activeTab && <ResourceList resources={categoryItem} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
