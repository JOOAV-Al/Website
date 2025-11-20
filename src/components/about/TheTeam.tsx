"use client";

import { theTeam } from "@/data/landing-page";
import Image from "next/image";

export default function TheTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[90%] w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center">
          <h2 className="max-w-[726px] mx-auto section-header">
            Meet the Team
          </h2>
          <p className="max-w-[90%] lg:max-w-[750px] mx-auto section-desc">
            The people powering every mile experts in logistics, committed to
            excellence, and driven to deliver beyond boundaries.
          </p>
        </div>
        <div className="grid grid-cols-1 mdx:grid-cols-2 gap-x-16 gap-y-20">
          {theTeam?.map((member, i) => {
            const { role, name, imageDesktop, imageMobile, desc } = member;
            return (
              <div
                key={i}
                className="flex flex-col mdx:flex-row justify-center gap-6 items-center"
              >
                <div className="w-full max-w-30 h-auto mx-auto mdx:mx-0">
                  {/* Mobile Image - Hidden on mdx and up */}
                  <Image
                    src={imageMobile}
                    alt={name}
                    width={300}
                    height={300}
                    className="w-50 h-full hidden max-mdx:block"
                  />
                  {/* Desktop Image - Shown on mdx and up */}
                  <Image
                    src={imageDesktop}
                    alt={name}
                    width={300}
                    height={300}
                    className="w-50 h-full hidden mdx:block"
                  />
                </div>
                <div className="flex flex-col gap-1 text-center mdx:text-start">
                  <h3 className="text-xl font-semibold text-[#383D46]">
                    {name}
                  </h3>
                  <h4 className="text-lg font-medium text-app-primary">
                    {role}
                  </h4>
                  <p className="text-base font-normal text-[#49505B] max-w-76.5">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
