import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import ProductStory from "@/components/sections/ProductStory";
import Pricing from "@/components/sections/Pricing";
import WhyNutriBrix from "@/components/sections/WhyNutriBrix";
import Testimonial from "@/components/sections/Testimonial";
import WhereToBuy from "@/components/sections/WhereToBuy";
import SoilDivider from "@/components/ui/SoilDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SoilDivider thick />
      <Marquee />
      <ProductStory />
      <SoilDivider />
      <Pricing />
      <SoilDivider />
      <WhyNutriBrix />
      <Testimonial />
      <WhereToBuy />
    </>
  );
}
