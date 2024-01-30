import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

export async function generateStaticParams({ params }) {
  const entries = await readdir("./public", { withFileTypes: true });

  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({ params }) {
  const file = await readFile("./public/" + params.slug + "/index.md", "utf8");
  let { data } = matter(file);
  return {
    title: data.title + " — Natalia Sabadysh | Software Developer",
    description: data.spoiler,
  };
}

export default async function Page({ params }) {
  const filename = "./public/" + params.slug + "/index.md";
  const file = await readFile(filename, "utf8");

  const { content, data } = matter(file);

  return (
    <div>
      {new Date(data.date).toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}

      <h1>{data.title}</h1>
    </div>
  );
}
