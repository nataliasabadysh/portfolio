import { Hero } from "./components/hero";
import { EmojisplosionHeart } from "./components/emoji";
import { HighlightTabsNav } from "./components/tabs";
import { Achievement } from "./components/achievement";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Achievement />
        <EmojisplosionHeart />
        <HighlightTabsNav />
      </main>
    </>
  );
}
