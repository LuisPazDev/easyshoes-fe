import { HomeHeader } from "./HomeHeader";
import { HomeSportCard } from "./HomeSportCard";
import { OurStrengths } from "./OurStrengths";
import { HomeFooter } from "./HomeFooter";
import { HomeRegisterCard } from "./HomeRegisterCard";
import { HomeSupportCard } from "./HomeSupportCard";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeSportCard />
      <HomeRegisterCard />
      <OurStrengths />
      <HomeSupportCard />
      <HomeFooter />
    </>
  );
}

export default Home;
