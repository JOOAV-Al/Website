import { NavLinkItem } from "@/interfaces/landing-page";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      linkName: "Company",
      links: [
        {
          url: "/about",
          label: "About",
        },
        {
          url: "#career",
          label: "Career",
        },
        {
          url: "/contact-us",
          label: "Contact Us",
        },
      ],
    },
    {
      linkName: "Support",
      links: [
        {
          url: "#faq",
          label: "FAQ",
        },
        {
          url: "#customer-support",
          label: "Customer Support",
        },
        {
          url: "#tracking",
          label: "Tracking",
        },
      ],
    },
  ];
  return (
    <footer className="bg-app-primary">
      <div className="max-w-[90%] mx-auto py-12 flex flex-col gap-16 mdxl:flex-row justify-between">
        <div className="max-w-[50%] mx-0 mdl:mx-auto mdxl:mx-0 w-full">
          <Link
            href={"/"}
            className="w-full h-[121px] ring-0!"
          >
            <Image
              src={"/jooav-logo.svg"}
              alt="JOOAV Logo"
              width={457}
              height={121}
              className=""
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-col mdl:flex-row gap-20 sm:justify-center mdxl:justify-around">
          {links?.map((section, i) => {
            const { linkName, links } = section;
            return (
              <div key={i} className="text-[#FEFAEB] flex flex-col gap-2">
                <h3 className="text-[28px] font-semibold">{linkName}</h3>
                <div className="flex flex-col gap-6 pb-6">
                  {links?.map((link, i) => {
                    const { url, label } = link;
                    return (
                      <Link key={i} className={`hover:underline`} href={url}>
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t border-[#2D8CFF] max-w-[90%] mx-auto text-center">
        <p className="text-white mb-8 mt-1">
          © 2025 Jooav. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
