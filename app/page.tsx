import Layouts from "@/common/components/layouts";
import { FeatureSection } from "@/common/components/sections/home/FeatureSection";
import HeroSection from "@/common/components/sections/home/HeroSection";

export default function Home() {
  return (
    <Layouts>
      <HeroSection />
      <FeatureSection />
    </Layouts>
  );
}
