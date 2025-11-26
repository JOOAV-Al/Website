import { mission } from "@/data/landing-page";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row-reverse justify-between gap-6 max-w-[90%] mx-auto lg:mx-0 lg:ml-auto">
        <div className="flex-4/10 w-full bg-transparent">
          <Image
            src={"/mission-mobile.webp"}
            alt="A woman smiling with POS Machine in her hands"
            width={640}
            height={605}
            className="w-full h-full max-h-[80vh] lg:max-h-full object-cover object-top lg:object-center"
          />
        </div>
        <div className="flex-6/10 flex justify-center lg:justify-end items-center py-6 lg:pr-6">
          <div className="max-w-[645px] lg:max-w-200 flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2 text-center lg:text-start">
              <h2 className="section-header">
                Our Mission and Vision: Delivering Beyond Boundaries
              </h2>
              <p className="section-desc">
                We are committed to redefining freight delivery across regions
                by providing reliable, efficient, and technology-driven
                logistics solutions. Our mission is to move goods seamlessly and
                safely, while our vision is to create a connected network that
                empowers businesses to grow without limits.
              </p>
            </div>

            <div className="font-medium! grid grid-cols-1 smd:grid-cols-2 mx-auto w-full gap-8 lg:gap-4">
              {mission?.map((m, i) => (
                <div
                  key={i}
                  className={`${m.bgColor} p-6 rounded-lg text-start max-w-[311px] mx-auto smd:mx-0 w-full flex flex-col gap-2`}
                >
                  <h3 className="text-2xl lg:text-[28px] font-semibold text-white">
                    {m.value}
                  </h3>
                  <p className="section-desc text-white! max-w-60">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
