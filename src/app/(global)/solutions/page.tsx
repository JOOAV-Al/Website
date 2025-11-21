import SolutionsHero from "@/components/solutions/SolutionsHero";
import { Button } from "@/components/ui/button";

const SolutionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SolutionsHero />
      <section className="bg-app-secondary py-16 px-6">
        <div className="max-w-[825px] mx-auto flex flex-col justify-center gap-6 text-center!">
          <h2 className="section-header text-white! leading-11!">
            Let’s Build Smarter Commerce Together.
          </h2>
          <p className="section-desc text-white!">
            Whether you’re a retailer, wholesaler, logistics provider, or
            financial partner Jooav is creating the infrastructure for Africa’s
            next retail revolution.
          </p>
          <p className="section-desc text-white!">
            Partner with us: <strong>support@jooav.com</strong>
          </p>
          <Button className="w-fit mx-auto" variant={"accent"}>
            Join the Waitlist
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
