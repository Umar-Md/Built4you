import Services from "../../components/sections/Services";
import BuildLab from "../../components/sections/BuildLab";

export const metadata = { title: "Services & Projects | Built4You" };

export default function ServicesPage() {
  return (
    <div className="pt-[70px]">
      <Services />
      <BuildLab />
    </div>
  );
}
