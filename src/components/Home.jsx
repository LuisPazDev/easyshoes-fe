import { HomeHeader } from "./HomeHeader";
import { HomeSportCard } from "./HomeSportCard";
import { HomeCasualCard } from "./HomeCasualCard";
import { HomeFashionCard } from "./HomeFashionCard";
import { OurStrengths } from "./OurStrengths";
import { HomeFooter } from "./HomeFooter";
import { HomeRegisterCard } from "./HomeRegisterCard";
import { HomeSupportCard } from "./HomeSupportCard";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeSportCard />
      <HomeCasualCard />
      <HomeFashionCard />
      <HomeRegisterCard />
      <OurStrengths />
      <HomeSupportCard />
      <HomeFooter />
    </>
  );
}

export default Home;
