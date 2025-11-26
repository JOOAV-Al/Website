"use client";

import Navbar from "@/components/home/Navbar";
import NavButton from "@/components/ui/NavButton";

const ContactUsHero = () => {
  return (
    <section className="bg-[#EDF5FB]">
      <div
        className="
        min-h-screen xl:min-h-[900px] 2xl:min-h-[1225px] w-full pb-20 flex flex-col gap-20 bg-no-repeat bg-cover
        bg-[url('/con-hero-mob.webp')]
        lg:bg-[url('/contact-hero.webp')]
        bg-bottom lg:bg-right xl:bg-top
        relative
        overflow-hidden
        clip-hero-bottom
      "
      >
        {/* Gradient Overlay — changes direction on mobile */}
        <div
          className="absolute inset-0 pointer-events-none lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(47,123,235,1) 0%, rgba(47,123,235,1) 25%, rgba(47,123,235,0.6) 75%, rgba(47,123,235,0.2) 80%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Desktop Gradient Overlay (left → right) */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(47,123,235,1) 25%, rgba(45,140,255,0.8) 50%, rgba(0,0,0,0.17) 75%)",
          }}
        />

        <Navbar />

        <div className="relative z-10 max-w-[90%] w-full mx-auto flex-1 flex lg:items-center">
          <div className="flex flex-col gap-4 text-center lg:text-start w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] lg:max-w-350 mx-auto lg:mx-0">
            <h1 className="hero-header">
              Let’s Power Your Retail Growth Together
            </h1>

            <p className="hero-desc max-w-[901px]">
              Whether you’re a retailer, wholesaler, manufacturer, or financial
              partner we’d love to hear from you.
            </p>

            <div className="flex justify-center lg:justify-start gap-x-3 gap-y-[29px] flex-wrap mt-10 sm:mt-12 md:mt-14 lg:mt-16">
              <NavButton route="/contact-us/#contact-form">
                Join the Waitlist
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
