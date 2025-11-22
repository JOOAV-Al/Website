import Navbar from "@/components/home/Navbar";
import { Button } from "@/components/ui/button";

const HomeHero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(45, 140, 255, 1) 0%, rgba(45, 140, 255, 0.8) 40%, rgba(254, 250, 235, 0.17) 100%), url(/exporting-hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full pb-20 flex flex-col gap-20 bg-no-repeat bg-center"
    >
      <Navbar />
      <div className="flex-1 flex items-center gap-12">
        <div className="text-center flex flex-col gap-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-4xl mx-auto">
          <h1 className="hero-header">
            Redefining Retail Inventory and Logistics in Africa
          </h1>
          <p className="hero-desc">
            Revolutionizing FMCG distribution in Africa Jooav connects
            manufacturers and SMEs through smart digital tools and physical
            infrastructure, empowering businesses to operate efficiently, access
            inventory seamlessly, and scale sustainably.
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap mt-10 sm:mt-12 md:mt-14 lg:mt-16 px-6">
            <Button variant={"primary"}>Join the Waitlist</Button>
            <Button variant={"accent"}>Explore Inventory</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
