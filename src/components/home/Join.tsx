"use client"
import NavButton from '@/components/ui/NavButton';

const Join = () => {
  return (
    <section className="bg-app-secondary flex flex-col justify-center gap-10 py-16 px-6">
      <h2 className="section-header max-w-[825px] mx-auto text-white! leading-11! text-center">
        Join hundreds of African businesses using Jooav Inventory to simplify
        their supply chain and grow sustainably
      </h2>
      <NavButton
        className="w-fit mx-auto block"
        route="/contact-us/#contact-form"
        variant="accent"
      >
        Join the Waitlist
      </NavButton>
    </section>
  );
}

export default Join