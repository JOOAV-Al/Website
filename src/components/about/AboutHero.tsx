import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <div className="bg-linear-to-b from-app-primary via-app-primary to-white min-h-screen w-full py-50">
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
  );
};

export default AboutHero;
