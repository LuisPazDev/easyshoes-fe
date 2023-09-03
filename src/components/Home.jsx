import { HomeHeader } from "./HomeHeader";
import { HomeSportCard } from "./HomeSportCard";
import { HomeCasualCard } from "./HomeCasualCard";
import { HomeFashionCard } from "./HomeFashionCard";
import { OurStrengths } from "./OurStrengths";
import { HomeFooter } from "./HomeFooter";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeSportCard />
      <HomeCasualCard />
      <HomeFashionCard />
      <OurStrengths />
    </>
  );
}

export default Home;
