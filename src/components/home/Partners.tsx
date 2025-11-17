import { partners } from "@/data/landing-page";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="py-20 bg-[#FEFAEB]">
      <div className="max-w-[1316px] w-full mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center">
          <h3 className="max-w-[726px] mx-auto section-header">
            Partners and Recognition
          </h3>
          <p className="max-w-[90%] lg:max-w-[726px] mx-auto section-desc">
            Hear directly from our customers as they share their experiences,
            stories, and successes. Their words inspire us to keep delivering
            the best every day.
          </p>
        </div>

        <div className="max-w-[90%] lg:max-w-[890px] mx-auto flex justify-center items-center gap-12 flex-wrap">
          {partners.map((p, i) => (
            <Image
              key={i}
              src={p}
              alt="Partners"
              width={277}
              height={125}
              className="w-[170px] h-20"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
