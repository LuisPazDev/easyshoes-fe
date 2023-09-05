import { HomeHeader } from "./HomeHeader";
import { HomeSportCard } from "./HomeSportCard";
import { HomeCasualCard } from "./HomeCasualCard";
import { HomeFashionCard } from "./HomeFashionCard";
import { OurStrengths } from "./OurStrengths";
import { HomeFooter } from "./HomeFooter";
import { HomeRegisterCard } from "./HomeRegisterCard";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeSportCard />
      <HomeCasualCard />
      <HomeFashionCard />
      <HomeRegisterCard />
      <OurStrengths />
      <HomeFooter />
    </>
  );
}

export default Home;
