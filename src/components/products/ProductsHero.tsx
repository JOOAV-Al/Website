import { Button } from '@/components/ui/button';

const ProductsHero = () => {
  return (
    <div className="bg-app-primary min-h-screen w-full py-20 flex items-center">
      <div className="text-center flex flex-col gap-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-4xl mx-auto">
        <h1 className="hero-header">
          Redefining Inventory Management for Africa’s Retail Economy
        </h1>
        <p className="hero-desc">
          Our flagship mobile-first ERP platform helps small and medium
          businesses manage inventory, restock from manufacturers, and gain full
          visibility across the FMCG value chain.
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <Button>Join the Waitlist</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductsHero