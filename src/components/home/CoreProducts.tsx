import { Button } from "@/components/ui/button";
import { coreProducts } from "@/data/landing-page";
import Image from "next/image";

const CoreProducts = () => {
  return (
    <div className="py-25 bg-[#2F7BEB14]">
      <div className="max-w-[1316px] w-full mx-auto flex flex-col gap-8">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 p-6">
          <div className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-4">
            <h2 className="text-[#51C4F3] font-medium text-lg ">
              OUR CORE PRODUCT
            </h2>
            <h3 className="max-w-[548px] mx-auto lg:mx-0 text-[#383D46] font-semibold text-2xl md:text-[28px] lg:text-[32px]">
              Meet Jooav Inventory Jooav ERP
            </h3>
            <p className="max-w-[90%] lg:max-w-[548px] mx-auto lg:mx-0 text-[#49505B] font-normal text-base md:text-sm lg:text-base">
              Jooav Inventory is the backbone of modern African commerce. Our
              mobile-first ERP platform enables FMCG retailers and wholesalers
              to monitor stock, restock directly from manufacturers, and manage
              operations effortlessly in one simple, intelligent dashboard.
            </p>
            <div className="grid grid-cols-1 mt-4 gap-8 lg:gap-0 bg-transparent">
              {coreProducts?.map((cp, i) => {
                const { value, desc, icon } = cp;
                return (
                  <div
                    key={i}
                    className="flex flex-col lg:flex-row gap-6 flex-nowrap py-6 lg:py-0"
                  >
                    <div>
                      <div className="flex justify-center items-center w-14 h-14 lg:w-10 lg:h-10 xl:w-14 xl:h-14 rounded-full bg-app-primary mx-auto">
                        <Image
                          src={icon}
                          alt={value}
                          width={24}
                          height={24}
                          className="w-6 h-6 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
                        />
                      </div>
                      {i !== coreProducts.length - 1 && (
                        <div className="w-px hidden lg:block h-full mx-auto">
                          <Image
                            src={"/line-main.png"}
                            alt={value}
                            width={1}
                            height={24}
                            className="w-full h-10 xl:h-15"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-start gap-2 max-w-[380px] lg:max-w-full mx-auto">
                      <h3 className="text-xl lg:text-base xl:text-xl text-app-primary font-medium">
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
          <div className="flex-1 w-[90%] mb-6 lg:mb-0 mx-auto lg:w-full bg-transparent">
            <Image
              src={"/core-products.png"}
              alt="Core Products"
              width={640}
              height={605}
              className="w-full"
            />
          </div>
        </div>
        <Button className="w-fit mx-auto" variant={"primary"}>
          Explore Jooav Inventory
        </Button>
      </div>
    </div>
  );
};

export default CoreProducts;
