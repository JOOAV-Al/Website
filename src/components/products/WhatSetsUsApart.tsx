import { products } from "@/data/landing-page";

const WhatSetsUsApart = () => {
  return (
    <section className="py-25 bg-white">
      <div className="max-w-[90%] w-full mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 p-6">
          <div className="flex-4/10 mb-6 lg:mb-0 w-full mx-auto lg:mx-0 text-center lg:text-start">
            <h3 className="max-w-[414px] mx-auto lg:mx-0 text-[#383D46] font-semibold text-2xl md:text-[28px] lg:text-[32px] mb-1">
              What Sets Us Apart
            </h3>
            <p className="max-w-[90%] lg:max-w-[414px] mx-auto lg:mx-0 text-[#49505B] font-normal text-base md:text-sm lg:text-base">
              We combine cutting-edge logistics, trusted partnerships, and
              real-time tracking to ensure your goods move safely and
              efficiently from manufacturers to retailers on time, every time.
            </p>
          </div>
          <div className="flex-6/10 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-4">
            <div className="grid grid-cols-1 mt-4 gap-4 bg-transparent">
              {products?.map((cp, i) => {
                const { value, desc } = cp;
                return (
                  <div
                    key={i}
                    className="flex flex-col lg:flex-row lg:items-center gap-6 py-6 lg:py-0 border-b border-[#AFB3BA]"
                  >
                    <div className="text-app-primary text-[32px] font-semibold pl-6">
                      {i + 1}
                    </div>
                    <div className="pb-2 flex-1 flex flex-col items-center lg:items-start text-center lg:text-start gap-2 max-w-[380px] lg:max-w-[600px] mx-auto">
                      <h3 className="text-xl lg:text-base xl:text-xl text-[#383D46] font-medium">
                        {value}
                      </h3>
                      <p className="text-[#49505B] text-base lg:text-sm xl:text-base font-normal">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
