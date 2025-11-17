import CoreProducts from "@/components/home/CoreProducts";
import CoreValues from "@/components/home/CoreValues";
import FAQ from "@/components/home/FAQ";
import HomeHero from "@/components/home/HomeHero";
import HeroCarousel from "@/components/home/HomeSlider";
import MoreInformation from "@/components/home/MoreInformation";
import Partners from "@/components/home/Partners";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <CoreValues />
      <CoreProducts />
      <HeroCarousel />
      <TestimonialsCarousel />
      <div className="bg-app-secondary flex flex-col justify-center gap-10 py-16 px-6">
        <h2 className="section-header max-w-[825px] mx-auto text-white! leading-11! text-center">
          Join hundreds of African businesses using Jooav Inventory to simplify
          their supply chain and grow sustainably
        </h2>
        <Button className="w-fit mx-auto" variant={"accent"}>
          Join the Waitlist
        </Button>
      </div>
      <Partners />
      <MoreInformation />
      <FAQ />
    </div>
  );
}
