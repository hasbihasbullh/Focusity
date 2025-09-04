import Layouts from "@/common/layouts";

import HeroSection from "@/common/sections/home/HeroSection";
import { FeatureSection } from "@/common/sections/home/FeatureSection";
import  { TestimonialSection } from "@/common/sections/home/TestimonialSection"

export default function Home() {
  return (
    <Layouts>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection/>
    </Layouts>
  );
}
