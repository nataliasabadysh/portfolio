"use client";

import { useState } from "react";
import { list, tags } from "./constants";
import style from "./styles.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const Item = ({ item, isExpanded }) => {
  return isExpanded ? (
    <li className={style.achievement__descr}>
      {item.message}
      <Link href={item.link} className={style.read_more}>
        {" "}
        read more
      </Link>
    </li>
  ) : null;
};

export const Achievement = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleItemClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderlistJSX = ({ title, desc }) => {
    const toggle = title === expandedId;

    const listItems = desc.map((item, index) => (
      <Item key={title + index} item={item} isExpanded={toggle} />
    ));

    return (
      <li
        className={style.achievement__item}
        key={title}
        onClick={() => handleItemClick(title)}
      >
        <div className={style["achievement__item-header"]}>
          <h3 className={style.title}>{title}</h3>
          {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>

        <ul className={style.achievement__list}>{listItems}</ul>
      </li>
    );
  };

  const tagsJsx = tags.map((tag) => (
    <li key={tag} className={style.achievement__tag}>
      <div>{tag}</div>
    </li>
  ));

  return (
    <section className={style.achievement}>
      <div className={style.achievement__header}>
        <h2>Where I'm good at:</h2>
        <ul>{tagsJsx}</ul>
      </div>

      <ul className={style.achievement__list}>{list.map(renderlistJSX)}</ul>
    </section>
  );
};
