import { Button } from "@/components/ui/button";

const SolutionsHero = () => {
  return (
    <div className="bg-linear-to-t from-app-primary via-app-primary to-app-primary/30 min-h-screen w-full py-20 flex items-center">
      <div className="flex flex-col gap-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-4xl mx-auto">
        <h1 className="hero-header">
          Powering Africa’s Retail Supply Chain Digitally and Physically.
        </h1>
        <p className="hero-desc">
          From inventory management to logistics, warehousing, and financial
          inclusion Jooav builds the connected systems that keep Africa’s retail
          economy moving.
        </p>
        <div className="flex justify-start items-center gap-8 flex-wrap mt-10 sm:mt-12 md:mt-14 lg:mt-16 px-6">
          <Button>Explore Solutions</Button>
          <Button variant={"accent"}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsHero;
