import Navbar from "@/components/home/Navbar";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(45, 140, 255, 1) 0%, rgba(45, 140, 255, 0.8) 40%, rgba(254, 250, 235, 0.17) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full pb-20 flex flex-col gap-20 bg-no-repeat bg-center"
    >
      <Navbar />
      <div className="flex-1 flex items-center gap-12">
        <div className="text-center flex flex-col gap-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-4xl mx-auto">
          <h1 className="hero-header">
            Building Africa’s Virtual Depot for Smarter Retail
          </h1>
          <p className="hero-desc">
            Jooav Inventory (Jooav ERP) empowers SMEs to manage stock smarter,
            order directly from manufacturers, and restock faster — all from a
            mobile-first platform.
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap mt-10 sm:mt-12 md:mt-14 lg:mt-16 px-6">
            <Button>Join the Waitlist</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
