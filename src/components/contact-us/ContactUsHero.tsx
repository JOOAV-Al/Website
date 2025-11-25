"use client"
import Navbar from '@/components/home/Navbar';
import NavButton from '@/components/ui/NavButton';

const ProductsHero = () => {
  return (
    <div className="min-h-screen w-full pb-20 flex flex-col gap-20 relative overflow-hidden">
      {/* Overlay - covers full width */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(45, 140, 255, 1) 0%, rgba(45, 140, 255, .8) 100%)",
        }}
      />

      {/* Background Image - responsive positioning */}
      <div
        className="absolute top-0 h-full bg-no-repeat bg-center w-full max-w-2xl left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 lg:w-2/5 lg:max-w-[588px] z-0"
        style={{
          backgroundImage: "url(/export_import.svg)",
          backgroundSize: "contain",
        }}
      />

      {/* Content - on top */}
      <div className="relative z-10 min-h-[calc(100vh-200px)] w-full pb-10 flex flex-col gap-26">
        <Navbar />
        <div className="flex-1 flex items-center gap-12">
          <div className="text-center lg:text-start flex flex-col gap-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] mx-auto">
            <h1 className="hero-header">
              Redefining Inventory Management for Africa's Retail Economy
            </h1>
            <p className="hero-desc">
              Our flagship mobile-first ERP platform helps small and medium
              businesses manage inventory, restock from manufacturers, and gain
              full visibility across the FMCG value chain.
            </p>
            <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
              <NavButton route="/contact-us/#contact-form" className='w-fit mx-auto lg:mx-0 block'>
                Join the Waitlist
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;