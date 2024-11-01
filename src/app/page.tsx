import BenefitsSection from "@/components/sections/BenefitsSection";
import {BlueSection} from "@/components/sections/BlueSection";
import EfficentColabSection from "@/components/sections/EfficentColabSection";
import GetYourBusinessGrowFastSection from "@/components/sections/GetYourBusinessGrowFastSection";
import HeadingSection from "@/components/sections/HeadingSection";
import IconsSection from "@/components/sections/IconsSection";
import WorkFromAnywhereSection from "@/components/sections/WorkFromAnywhereSection";

export default function HomePage() {
  return (
    <div>
      <HeadingSection />
      <IconsSection />
      <EfficentColabSection />
      <WorkFromAnywhereSection />
      <BlueSection />
      <GetYourBusinessGrowFastSection />
      <BenefitsSection />
    </div>
  );
}
