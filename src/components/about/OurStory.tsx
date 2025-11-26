"use client";

import { ourStory } from "@/data/landing-page";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-20 bg-[#2F7BEB14]">
      <div className="max-w-[90%] w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center">
          <h2 className="max-w-[726px] mx-auto section-header">Our Story</h2>
          <p className="max-w-[90%] lg:max-w-[750px] mx-auto section-desc">
            Jooav was founded to solve Africa’s broken retail supply chain. We
            combine technology, logistics partnerships, and direct manufacturer
            access to empower retailers and wholesalers to grow profitably and
            sustainably.
          </p>
        </div>
        <div className="flex-4/10 w-full max-w-[1065px] mx-auto bg-transparent py-12">
          <Image
            src={"/our-story.svg"}
            alt="A woman smiling with POS Machine in her hands"
            width={1065}
            height={365}
            className="w-full h-[365px] hidden md:block animate-bounce [animation-duration:2.5s]"
          />
          <div className="flex flex-col items-center gap-16 md:hidden">
            {ourStory?.map((story, i) => {
              const { image, text, year } = story;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <Image
                    src={image}
                    alt={text}
                    width={112}
                    height={105}
                    className="w-28 h-[105px] animate-bounce [animation-duration:1.5s]"
                  />
                  <h3 className="text-app-primary text-xl font-semibold my-1.5">
                    {text}
                  </h3>
                  <p className="text-[#49505B] text-lg">{year}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
