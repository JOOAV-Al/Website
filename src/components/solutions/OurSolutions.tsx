"use client";

import NavButton from "@/components/ui/NavButton";
import { ourSolutions } from "@/data/landing-page";
import Image from "next/image";

export default function OurSolutions() {
  return (
    <section className="py-20 bg-white lg:px-8 bg-none lg:bg-[url(/large-joav-logo.svg)]">
      <div className="max-w-[90%] lg:max-w-[1241px] w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center">
          <h2 className="max-w-[726px] mx-auto section-header">
            Our Solutions
          </h2>
          <p className="max-w-[90%] w-[1254px] mx-auto section-desc">
            At Jooav, we’re building Africa’s Virtual Depot a seamless ecosystem
            connecting manufacturers, distributors, and retailers through
            technology, logistics, and financial innovation. Our solutions
            integrate both digital tools and real-world infrastructure, giving
            businesses visibility, speed, and access to the resources they need
            to grow.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-20 lg:gap-24">
          {ourSolutions?.map((cp, i) => {
            const { value, desc, image, points, withCTAs } = cp;
            const isReversed = i % 2 == 1;

            return (
              <div
                key={i}
                className={`flex flex-col items-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } lg:flex-row gap-6 lg:gap-12`}
              >
                <div className="flex-1 w-[90%] lg:mb-0 mx-auto lg:w-full bg-transparent">
                  <Image
                    src={image}
                    alt={value}
                    width={601}
                    height={486}
                    className="w-full"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-8 flex-nowrap">
                  <div className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-2">
                    <h2 className="max-w-[548px] mx-auto lg:mx-0 text-app-primary font-semibold text-2xl md:text-[28px] lg:text-[32px]">
                      {value}
                    </h2>
                    <p className="max-w-[90%] lg:max-w-[562px] mx-auto lg:mx-0 section-desc">
                      {desc}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 lg:gap-8">
                    {points.map((p, i) => (
                      <div
                        key={i}
                        className="flex flex-col lg:flex-row flex-nowrap gap-2"
                      >
                        <div className="mx-auto lg:mx-0">
                          <Image
                            src={"/arr.png"}
                            alt={p}
                            width={24}
                            height={24}
                            className="w-6 h-6 rotate-90 lg:rotate-0"
                          />
                        </div>
                        <p className="text-[#49505B] text-base lg:text-sm xl:text-base text-center lg:text-start font-normal max-w-[394px] lg:max-w-[526px] mx-auto lg:mx-0">
                          {p}
                        </p>
                      </div>
                    ))}
                  </div>
                  {withCTAs ? (
                    <div className="flex justify-center lg:justify-start items-center gap-x-3 gap-y-[29px] flex-wrap mt-4">
                      <NavButton route="/products">Explore Jooav Inventory</NavButton>
                      <NavButton route="/contact-us/#contact-form" className="ring" variant={"accent"}>
                        Join the waitlist
                      </NavButton>
                    </div>
                  ) : (
                    <p className="text-app-secondary italic text-center lg:text-start font-medium mt-4">
                      Coming soon
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
