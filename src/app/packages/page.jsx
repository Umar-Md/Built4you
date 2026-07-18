import Pricing from "../../components/sections/Pricing";
import ComparePackages from "../../components/sections/ComparePackages";

export const metadata = { title: "Construction Packages | Built4You" };

export default function PackagesPage() {
  return <div className="pt-[70px]"><Pricing /><ComparePackages /></div>;
}
