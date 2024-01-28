import { Inter, Poppins } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal"],
});
export const metadata = {
  title: "Natalia Sabadysh, Software Developer ",
  description: "My Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " container"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
