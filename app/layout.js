import { Inter } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";
import { Footer } from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal"],
});

export const metadata = {
  title: "Natalia Sabadysh, Software Developer ",
  description:
    "I am a Software Developer specialising in complex enterprise web applications, with 6 years of professional experience in frontend technologies.",
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
