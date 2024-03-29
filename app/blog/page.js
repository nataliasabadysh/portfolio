// 'use client'
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

import { BlogList } from "../components/blog";
import styles from "./styles.module.css";

export async function getPosts() {
  const entries = await readdir("./public/blog/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map((dir) => readFile("./public/blog/" + dir + "/index.md", "utf8")),
  );
  const posts = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);
    return { slug, ...data };
  });
  posts.sort((a, b) => {
    return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  });
  return posts;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section className={`block ${styles.container} `}>
      <div className={styles.header}>
        <h1 className={styles.title}> Blog posts </h1>
        <span className={styles.label}>{posts.length || 0}</span>
      </div>
      <p>What's Trending in the Web World?</p>
      <p>
        On my blog, I'll be sharing my experiences, learnings, and thoughts on
        web development.
      </p>
      <div>
        <BlogList content={posts} />
      </div>
    </section>
  );
}
