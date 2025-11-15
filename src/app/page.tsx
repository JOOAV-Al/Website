import CoreProducts from "@/components/home/CoreProducts";
import CoreValues from "@/components/home/CoreValues";
import HomeHero from "@/components/home/HomeHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <CoreValues />
      <CoreProducts />
    </div>
  );
}
