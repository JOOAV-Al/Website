import { Clock, Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";

const OurOffices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1316px] w-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 p-6">
          <div className="flex-1 lg:flex justify-center items-center">
            <div className="max-w-[417px] flex flex-col gap-10">
              <h2 className="section-header">Our Offices</h2>

              <div className="font-medium! section-desc flex flex-col gap-8 lg:gap-4">
                <p className="section-desc font-medium!">
                  Nigeria Headquarters
                </p>
                <div className="flex gap-4 items-center">
                  <PhoneIcon fill="#2F7BEB" size={24} color="#2F7BEB" />
                  <span>+234 9033930771</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail size={24} color="#2F7BEB" />
                  <span>support@jooav.com</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Clock size={24} color="#2F7BEB" />
                  <span>Monday – Friday, 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mb-6 lg:mb-0 mx-auto w-full bg-transparent">
            <Image
              src={"/our-office.webp"}
              alt="Our Offices"
              width={570}
              height={553}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
