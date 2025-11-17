import { Clock, Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const MoreInformation = () => {
  return (
    // <div className="py-20">
    <div className="bg-[#ebf1fa] flex flex-col lg:flex-row-reverse justify-between gap-12">
      <div className="flex-1 w-full bg-transparent">
        <Image
          src={"/more-info.svg"}
          alt="Customer Representative"
          width={640}
          height={605}
          className="w-full"
        />
      </div>
      <div className="flex-1 flex justify-center items-center text-center p-6">
        <div className="max-w-[417px] mx-auto lg:mx-0 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="section-header">Need more information?</h2>
            <p className="section-desc">
              You can contact our customer care, if you need more enquiries
            </p>
          </div>

          <div className="font-medium! section-desc flex flex-col gap-8 lg:gap-4">
            <div className="flex gap-4 items-center">
              <PhoneIcon fill="#2F7BEB" size={24} color="#2F7BEB" />
              <span>0900 000 0000</span>
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
    </div>
    // </div>
  );
};

export default MoreInformation;
