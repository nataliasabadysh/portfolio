import { Inter } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";
import { Footer } from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal"]
});

export const metadata = {
  title: "Natalia's Personal Journey as a Web Developer",
  authors: {
    name: "Natalia Sabadysh"
  },
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Natalia Sabadysh", url: "https://www.nataliasabadysh.com/" }
  ],
  keywords: [
    "Natalia",
    "Web Developer",
    "Vancouver",
    "React",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "SQL",
    "Figma",
    "UI Design",
    "Modern Web Stack",
    "Web Development Portfolio"
  ],
  description:
    "Welcome to my portfolio. I'm Natalia, a web developer in Vancouver, sharing my journey and expertise in building modern web applications. Explore my insights on React, Next.js, TypeScript, GraphQL, SQL, and Figma UI design."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " wrapper"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
