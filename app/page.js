import { Hero } from "./components/hero";
import { EmojisplosionHeart } from "./components/emoji";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { About } from "./components/about";
import { HighlightTabsNav } from "./components/tabs";
import { Achievement } from "./components/achievement";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Achievement />
      </main>

      <footer>
        <EmojisplosionHeart />
        <HighlightTabsNav />
        <Footer />
      </footer>
    </>
  );
}
