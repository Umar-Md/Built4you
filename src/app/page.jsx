import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Vision from "../components/sections/Vision";
import BuildLab from "../components/sections/BuildLab";
import CostEstimator from "../components/sections/CostEstimator";
import Pricing from "../components/sections/Pricing";
import ComparePackages from "../components/sections/ComparePackages";
import Contact from "../components/sections/Contact";
import HowWeWork from "../components/sections/How_we_work";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Vision />
      <BuildLab />
      <CostEstimator />
      <Pricing />
      <ComparePackages />
      <Contact />
      <HowWeWork />
      <Footer />
      <FloatingButtons />
    </>
  );
}