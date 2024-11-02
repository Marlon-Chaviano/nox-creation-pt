import BenefitsSection from "@/components/sections/BenefitsSection";
import {BlueSection} from "@/components/sections/BlueSection";
import EfficentColabSection from "@/components/sections/EfficentColabSection";
import FaqSection from "@/components/sections/FaqSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GetYourBusinessGrowFastSection from "@/components/sections/GetYourBusinessGrowFastSection";
import HeadingSection from "@/components/sections/HeadingSection";
import IconsSection from "@/components/sections/IconsSection";
import LinksSection from "@/components/sections/LinksSection";
import PurpleSection from "@/components/sections/PurpleSection";
import {TechnologyArticlesSection} from "@/components/sections/TechnologyArticlesSection";
import WorkFromAnywhereSection from "@/components/sections/WorkFromAnywhereSection";

export default function HomePage() {
  return (
    <div>
      <HeadingSection />
      {/* <IconsSection /> */}
      <EfficentColabSection />
      <WorkFromAnywhereSection />
      <BlueSection />
      <GetYourBusinessGrowFastSection />
      <BenefitsSection />
      {/* YellowSection */}
      <FeaturesSection />
      <TechnologyArticlesSection />
      <FaqSection />
      <PurpleSection />
      <LinksSection />
    </div>
  );
}
