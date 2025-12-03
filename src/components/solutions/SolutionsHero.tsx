"use client"
import Navbar from "@/components/home/Navbar";
import NavButton from "@/components/ui/NavButton";

const SolutionsHero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.17) 0%, rgba(45, 140, 255, 0.8) 70%, rgba(45, 140, 255, 1) 100%), url(/factory_worker.webp)",
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
      className="min-h-screen lg:min-h-[933px] 2xl:min-h-280 w-full pb-20 flex flex-col gap-20 lg:gap-30 xl:gap-34 3xl:gap-40 bg-no-repeat bg-right md:bg-center"
    >
      <Navbar />
      <div className="flex-1 flex items-center lg:items-end gap-12">
        <div className="flex flex-col gap-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] mx-auto text-center lg:text-start ">
          <h1 className="hero-header max-w-[1208px] 2xl:max-w-[1440px] w-full">
            Powering Africa’s Retail Supply Chain Digitally and Physically.
          </h1>
          <p className="hero-desc max-w-[901px]">
            From inventory management to logistics, warehousing, and financial
            inclusion, Jooav builds the connected systems that keep Africa’s
            retail economy moving.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-x-3 gap-y-[29px] flex-wrap mt-10">
            <NavButton
              route="/solutions/#all-solutions"
            >
              Explore Solutions
            </NavButton>
            <NavButton
              route="/contact-us/#contact-form"
              variant="accent"
            >
              Get Started
            </NavButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsHero;
