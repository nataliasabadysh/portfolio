import { Hero } from "./components/hero";
import { EmojisplosionHeart } from "./components/emoji";
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
        <EmojisplosionHeart />
        <HighlightTabsNav />
      </main>
    </>
  );
}
