import { Hero } from "./components/hero";
import { HighlightTabsNav } from "./components/tabs";
import { Achievement } from "./components/achievement";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Achievement />
        <HighlightTabsNav />
      </main>
    </>
  );
}
