import { Hero } from "./components/hero";
import { EmojisplosionHeart } from "./components/emoji";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { About } from "./components/about";
import { HighlightTabsNav } from "./components/tabs/HighlightTabsNav";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
      </main>

      <footer>
        <EmojisplosionHeart />
        <HighlightTabsNav />
        <Footer />
      </footer>
    </>
  );
}
