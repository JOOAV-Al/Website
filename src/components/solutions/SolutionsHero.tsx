import Navbar from "@/components/home/Navbar";
import { Button } from "@/components/ui/button";

const SolutionsHero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.17) 0%, rgba(45, 140, 255, 0.8) 70%, rgba(45, 140, 255, 1) 100%), url(/factory_worker.webp)",
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
      className="min-h-screen w-full pb-20 flex flex-col gap-20 bg-no-repeat bg-right mdl:bg-center"
    >
      <Navbar />
      <div className="flex-1 flex items-center gap-12">
        <div className="flex flex-col gap-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-4xl mx-auto">
          <h1 className="hero-header">
            Powering Africa’s Retail Supply Chain Digitally and Physically.
          </h1>
          <p className="hero-desc">
            From inventory management to logistics, warehousing, and financial
            inclusion Jooav builds the connected systems that keep Africa’s
            retail economy moving.
          </p>
          <div className="flex justify-start items-center gap-8 flex-wrap mt-10 sm:mt-12 md:mt-14 lg:mt-16 px-6">
            <Button>Explore Solutions</Button>
            <Button variant={"accent"}>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsHero;
