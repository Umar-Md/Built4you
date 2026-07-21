import Hero from "../components/sections/Hero";
import { WhyChooseUs } from "../components/sections/Vision";
import CostEstimator from "../components/sections/CostEstimator";
import Pricing from "../components/sections/Pricing";
import ComparePackages from "../components/sections/ComparePackages";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComparePackages />
      <Pricing />
      <CostEstimator />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
