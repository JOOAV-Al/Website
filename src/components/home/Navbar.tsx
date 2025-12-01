"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { NavLinkItem } from "@/interfaces/landing-page";
import NavButton from "@/components/ui/NavButton";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false)
  const links: NavLinkItem[] = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/about",
      label: "About",
    },
    {
      url: "/products",
      label: "Products",
    },
    {
      url: "/solutions",
      label: "Solutions",
    },
    {
      url: "/contact-us",
      label: "Contact Us",
    },
  ];
  return (
    <div className="flex justify-center z-40 bg-transparent border-none!">
      <div className="static block lg:hidden w-[95%] sm:w-[90%] mt-10 px-2 xl:px-6">
        <nav className="flex flex-row justify-between items-center">
          {/* <Link href={"/"} className="block w-80 lg:w-[102px] ring-0!">
            <Image
              src={"/jooav-logo-2.svg"}
              alt="JOOAV Logo"
              width={102}
              height={27}
              className="h-5 sm:h-6 md:h-[27px]"
            />
          </Link> */}
          <Link href={"/"} className="block w-80 lg:w-[102px] ring-0!">
           <img
             src="/jooav-logo-2.svg"
             alt="JOOAV Logo"
             className="h-5 sm:h-6 md:h-[27px] object-contain"
           />
         </Link>
          <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
              <div className="bg-[#DDDCDB3D] border rounded-3xl border-white h-8 sm:h-10 md:h-12.5 w-10 sm:w-12 md:w-14.5 flex justify-center items-center cursor-pointer">
                <MenuIcon
                  className="size-6 sm:size-7 md:size-8"
                  color="white"
                />
              </div>
            </DrawerTrigger>
            <DrawerContent className="h-fit p-4 rounded-b-lg">
              <DrawerHeader className="">
                <DrawerTitle
                  aria-description="Close Button"
                  className="flex justify-center items-center h-10 w-10 ml-auto hover:bg-[#2F7BEB33] rounded-sm text-app-primary cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <X className="" size={30} />
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col gap-6 pb-6">
                {links?.map((link, i) => {
                  const { url, label } = link;
                  const isActive = pathname === url;
                  return (
                    <Link
                      onNavigate={() => setOpen(false)}
                      key={i}
                      className={`${
                        isActive
                          ? "bg-[#2F7BEB33] text-app-primary font-medium rounded-md text-2xl"
                          : "bg-transparent font-normal text-xl hover:border border-app-primary rounded-md"
                      } text-[#383D46] p-4`}
                      href={url}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </DrawerContent>
          </Drawer>
        </nav>
      </div>
      <div className="bg-[#DDDCDB3D] border rounded-3xl border-white h-16.25 static hidden lg:block w-[90%] mt-12 px-4 py-2">
        <nav className="flex justify-between items-center h-full">
          {/* <Link href={"/"} className="block w-[102px] h-[27px]">
            <Image
              src={"/jooav-logo-2.svg"}
              alt="JOOAV Logo"
              width={102}
              height={27}
            />
          </Link> */}
          <Link href={"/"} className="block w-[102px] h-[27px]">
            <img
              src="/jooav-logo-2.svg"
              alt="JOOAV Logo"
              className="w-[102px] h-[27px] object-contain"
            />
          </Link>
          <div className="flex justify-between items-center gap-4 xl:gap-6">
            {links?.map((link, i) => {
              const { url, label } = link;
              const isActive = pathname === url;
              return (
                <Link
                  key={i}
                  className={`${
                    isActive
                      ? "bg-app-primary font-semibold rounded-full"
                      : "bg-transparent font-normal"
                  } text-base text-white px-4 py-2`}
                  href={url}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <NavButton route="/contact-us/#contact-form">Get Started</NavButton>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
