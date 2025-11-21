import CoreProducts from "@/components/home/CoreProducts";
import CoreValues from "@/components/home/CoreValues";
import FAQ from "@/components/home/FAQ";
import HomeHero from "@/components/home/HomeHero";
import HeroCarousel from "@/components/home/HomeSlider";
import Join from "@/components/home/Join";
import MoreInformation from "@/components/home/MoreInformation";
import Partners from "@/components/home/Partners";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <CoreValues />
      <CoreProducts />
      <HeroCarousel />
      <TestimonialsCarousel />
      <Join />
      <Partners />
      <MoreInformation />
      <FAQ />
    </div>
  );
}
