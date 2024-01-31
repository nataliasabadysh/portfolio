"use client";

import { useState } from "react";
import { ResourceList } from "./categoryItem";
import styles from "./styles.module.css";

const list = [
  {
    category: "web development",
    resources: [
      { url: "https://codeguide.co/", name: "Code Guide" },
      {
        url: "https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element",
        name: "HTML spec Standard",
      },
      { url: "https://validator.w3.org/nu/", name: "Validator HTML" },
      { url: "https://htmlreference.io/element/a/", name: "htmlreference" },
      { url: "https://css-tricks.com/", name: "css-tricks, CSS " },
      { url: "https://cssreference.io/", name: "cssreference CSS" },
      {
        url: "https://codepip.com/",
        name: "Codepip,web development games.CSS ",
      },
      { url: "https://htmlcheatsheet.com/css/", name: "CSS CheatSheet" },
      { url: "https://quickref.me/css3.html", name: "CSS 3 cheatsheet" },
      {
        url: "https://yesviz.com/viewport/",
        name: "Viewport Size for Devices",
      },
      { url: "https://www.mydevice.io/", name: "Screen metrics" },
      { url: "https://caniuse.com/", name: "Can I Use ?" },
    ],
  },
  {
    category: "javascript",
    resources: [
      {
        name: "find the cost of adding a npm package to your bundle",
        url: "https://bundlephobia.com/",
      },
      {
        name: "Ecma TC39",
        url: "https://github.com/tc39/proposals",
      },
      {
        name: "Ecma TC53, standardization",
        url: "https://github.com/tc39/proposals",
      },
      {
        url: "https://developer.mozilla.org/en-US/",
        name: "mozilla",
      },
      {
        url: "https://www.w3schools.com/js/js_arrays.asp",
        name: "w3schools",
      },
      {
        name: "Data Structures: Objects and Arrays(book)",
        url: "https://eloquentjavascript.net/04_data.html",
      },
      {
        name: "Exploring ES6 (book)",
        url: "https://exploringjs.com/es6/ch_arrays.html",
      },
    ],
  },
  {
    category: "python",
    resources: [
      {
        url: "https://github.com/donnemartin/system-design-primer",
        name: "The System Design Primer",
      },
    ],
  },
  {
    category: "sql",
    resources: [
      {
        url: "https://www.c-sharpcorner.com/article/structured-query-language-sql/",
        name: "Structured Query Language",
      },
    ],
  },
  {
    category: "typescript",
    resources: [
      {
        name: "The TypeScript Handbook",
        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
      },
      {
        name: "React & Redux in TypeScript - Complete Guide",
        url: "https://github.com/piotrwitek/react-redux-typescript-guide",
      },
      {
        name: "React TypeScript Cheatsheet",
        url: "https://react-typescript-cheatsheet.netlify.app/docs/basic/setup/",
      },
    ],
  },
  {
    category: "react",
    resources: [
      {
        url: "https://vasanthk.gitbooks.io/react-bits/content/",
        name: "React Bits. React Patterns, techniques, tips and tricks.",
      },
      {
        url: "https://github.com/Asabeneh/30-Days-Of-React/blob/master/21_Introducing_Hooks/21_introducing_hooks.md",
        name: "30 Days of React challenge.",
      },
    ],
  },
  {
    category: "image",
    resources: [
      { url: "https://squoosh.app/", name: "Squoosh (optimization)" },
      {
        url: "https://jakearchibald.github.io/svgomg/",
        name: "SVGOMG (optimization)",
      },
      {
        url: "https://unsplash.com/s/photos/team",
        name: "unsplash (photo storage)",
      },
      {
        url: "https://tinypng.com/",
        name: "Tiny png (Compression)",
      },
    ],
  },
  {
    category: "books",
    resources: [
      {
        url: "https://www.thriftbooks.com/w/code-complete_steve-mcconnell/248753/item/4046984/?utm_source=google&utm_medium=cpc&utm_campaign=pmax_canada_high&utm_adgroup=&utm_term=&utm_content=&gad_source=1&gclid=CjwKCAiA8NKtBhBtEiwAq5aX2JPHP2QlRYlKNvYdjttpHYk7IhjYTWcj7H4zvlz9IVpBhIu9gSdu9RoCiKoQAvD_BwE#idiq=4046984&edition=2487180",
        name: "Code Complete, Steve McConnell",
      },
      {
        url: "https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=asc_df_0132350882/?tag=googleshopc0c-20&linkCode=df0&hvadid=292982483438&hvpos=&hvnetw=g&hvrand=3938401040052068565&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001551&hvtargid=pla-435472505264&psc=1&mcid=ffff5ebc9f023d4fa66d447c82b0bbb6",
        name: "Clean Code, Robert Martin",
      },
      {
        url: "https://www.amazon.ca/Culture-Map-Breaking-Invisible-Boundaries/dp/1610392507",
        name: "The Culture Map",
      },
    ],
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

  {
    category: "community",
    resources: [
      {
        url: "https://portal.gitnation.org/",
        name: "GitNation Foundation, enthusiasts, engineers community",
      },
      {
        url: "https://codingchallenges.substack.com/",
        name: "Coding Challenges",
      },
      {
        url: "https://www.wearedevelopers.com/",
        name: "Europes #1Developer Community",
      },
      {
        url: "https://futuretech.nl/",
        name: "FUTURE TECH 2024",
      },
      {
        url: "https://cascadiajs.com/",
        name: "We arere a community for JavaScript developers in the Pacific Northwest.",
      },
      {
        name: "The contemporary software engineering and design festival",
        url: "https://c3fest.com/",
      },
      {
        name: "Empowering front end developers to shape the web of tomorrow.",
        url: "https://www.middlesbroughfe.co.uk/speakers",
      },
    ],
  },
  {
    category: "youtube",
    resources: [
      {
        url: "https://www.youtube.com/@FacebookOpenSource",
        name: "Meta Open Source",
      },
      {
        url: "https://www.youtube.com/@FacebookOpenSource",
        name: "Meta Open Source",
      },
    ],
  },
];

export const HighlightTabsNav = () => {
  const [expandedCategory, setExpandedCategory] = useState(0);

  const toggleCategory = (index) => {
    if (expandedCategory === index) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(index);
    }
  };

  return (
    <section className={styles.wrapper}>
      <h2>My Top Resources for Web Dev: </h2>
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
