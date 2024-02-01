import { readdir, readFile } from "fs/promises";

import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkSmartpants from "remark-smartypants";
import rehypePrettyCode from "rehype-pretty-code";

import overnight from "overnight/themes/Overnight-Slumber.json";

import "./markdown.css";

overnight.colors["editor.background"] = "var(--code-bg)";

export async function generateStaticParams() {
  const entries = await readdir("./public/blog", { withFileTypes: true });

  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({ params }) {
  const file = await readFile(
    "./public/blog/" + params.slug + "/index.md",
    "utf8",
  );
  let { data } = matter(file);
  return {
    title: data.title + " — Natalia Sabadysh | Software Developer",
    description: data.spoiler,
  };
}

export default async function Page({ params }) {
  const filename = "./public/blog/" + params.slug + "/index.md";
  const file = await readFile(filename, "utf8");

  const { content, data } = matter(file);

  console.log(data);

  return (
    <div className="markdown">
      {new Date(data.date).toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}

      <h1>{data.title}</h1>

      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [remarkSmartpants],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: overnight,
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}
