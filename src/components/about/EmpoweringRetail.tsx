"use client";

import Image from "next/image";

export default function EmpoweringRetail() {
  return (
    <section className="py-20 bg-[#2F7BEB14]">
      <div className="max-w-[90%] w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center">
          <h2 className="max-w-[726px] mx-auto section-header">
            Empowering Smarter Retail in Africa
          </h2>
          <p className="max-w-[90%] lg:max-w-[750px] mx-auto section-desc">
            Jooav was founded to solve Africa’s broken retail supply chain, We
            combine technology, logistics partnerships, and direct manufacturer
            access to empower retailers and wholesalers to grow profitably and
            sustainably.
          </p>
        </div>
        <div className="flex justify-center gap-12 items-center flex-wrap">
          <Image
            src={"/fidson.svg"}
            alt={"FIDSON"}
            width={161}
            height={170}
            className="w-40 h-[170px]"
          />
          <Image
            src={"/expand-global.svg"}
            alt={"Expand Global"}
            width={259}
            height={122}
            className="w-65 h-[122px]"
          />
        </div>
      </div>
    </section>
  );
}
