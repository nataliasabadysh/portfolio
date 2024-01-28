import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Natalia Sabadysh, Software Developer ",
  description: "My expirience ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " container"}>{children}</body>
    </html>
  );
}
