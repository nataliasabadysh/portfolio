import styles from "./styles.module.css";

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
];

export const HighlightTabsNav = () => {
  return (
    <section>
      <h2>Channels for every developer: </h2>
      <p>
        Where I learn and gettting inspiration. and where I would recommended
        for every developer.
      </p>
      <ul className={styles.highlight_tabs__container}>
        {list.map((categoryItem, index) => (
          <div key={index}>
            <button className={styles.highlight_tabs__tab}>
              {categoryItem.category}
            </button>

            {/* TODO */}
            {/* <ul className={styles.resourceList}>
                        {categoryItem.resources.length > 0 ? categoryItem.resources.map((resource, resourceIndex) => (
                            <li key={resourceIndex}>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name || 'Unnamed Resource'}</a>
                            </li>
                        )) : <li>No resources available in this category</li>}
                    </ul> */}
          </div>
        ))}
      </ul>
    </section>
  );
};
