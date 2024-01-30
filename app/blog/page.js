// 'use client'
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import { useRouter } from "next/navigation";
// import remarkSmartpants from "remark-smartypants";
// import rehypePrettyCode from "rehype-pretty-code";

// export const metadata = {
//   title: "A blog by Natalia Sabadysh",
//   description: "",
// };

export async function getPosts() {
  const entries = await readdir("./public/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map((dir) => readFile("./public/" + dir + "/index.md", "utf8")),
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

export default async function Blog({ params }) {
  const posts = await getPosts();

  console.log("1", params);

  console.log("2", posts);

  return (
    <section>
      <h1>Coming soon :)</h1>
      <p>
        On my blog, I'll be sharing my experiences, learnings, and thoughts on
        web development.
        <ul>
          {posts.map((item, idx) => (
            <li key={idx}>{item.slug}</li>
          ))}
        </ul>
      </p>
    </section>
  );
}
