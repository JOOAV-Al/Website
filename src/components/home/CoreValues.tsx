"use client"
import NavButton from "@/components/ui/NavButton";
import { coreValues } from "@/data/landing-page";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-[1216px] w-full mx-auto flex flex-col gap-8">
        <div className="bg-[#FEFAEB] flex flex-col lg:flex-row justify-between gap-12 p-6">
          <div className="flex-1 w-[90%] mx-auto lg:w-full bg-transparent">
            <Image
              src={"/core-values.webp"}
              alt="Core Values"
              width={640}
              height={400}
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-4 lg:gap-6">
            <h2 className="text-[#51C4F3] font-medium text-lg ">
              OUR CORE VALUE
            </h2>
            <h3 className="max-w-[548px] mx-auto lg:mx-0 section-header">
              Expertly Managing Every Step From Transit to Warehousing
            </h3>
            <p className="max-w-[90%] lg:max-w-[548px] mx-auto section-desc">
              We expertly manage every stage of your logistics journey from
              secure and efficient transit to organized, technology driven
              warehousing. Our team ensures your goods are handled with
              precision, tracked in real time, and delivered safely to their
              destination. With a focus on reliability, transparency, and speed,
              we make every step seamless so you can focus on your business
              while we take care of the rest.
            </p>
            <NavButton
              route="/solutions"
              variant={"ghost"}
              className="text-app-secondary w-fit mx-auto lg:mx-0 lg:mr-auto xl:mt-4"
            >
              Learn More <ArrowRight />
            </NavButton>
          </div>
        </div>
        <div className="grid grid-cols-1 mdl:grid-cols-2 mdx:grid-cols-3 lg:grid-cols-4 p-6 gap-8 bg-white">
          {coreValues?.map((cv, i) => {
            const { value, desc } = cv;
            return (
              <div
                key={i}
                className="flex flex-col lg:flex-row gap-6 flex-nowrap py-6"
              >
                <div className="h-fit lg:h-full w-25 mx-auto lg:max-w-fit lg flex flex-row-reverse lg:flex-col">
                  <span className="bg-[#2F7BEB0F] min-w-[50%] lg:min-w-0.5 min-h-0.5 lg:min-h-[50%]"></span>
                  <span className="bg-app-secondary min-w-[25%] lg:min-w-0.5 min-h-0.5 lg:min-h-[25%]"></span>
                  <span className="bg-[#2F7BEB0F] min-w-[25%] lg:min-w-0.5 min-h-0.5 lg:min-h-[25%]"></span>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-3 max-w-[280px] lg:max-w-full mx-auto">
                  <h3 className="text-xl text-app-primary font-medium">
                    {value}
                  </h3>
                  <p className="text-base font-normal">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
