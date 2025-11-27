// import { Clock, Mail, PhoneIcon } from "lucide-react";
// import Image from "next/image";

// const OurOffices = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-[1158px] 2xl:max-w-[1316px] w-full mx-auto">
//         <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 p-6 lg:p-0">
//           <div className="flex-1 lg:flex justify-center lg:justify-start items-center">
//             <div className="max-w-[417px] flex flex-col gap-10">
//               <h2 className="section-header">Our Offices</h2>

//               <div className="font-normal! section-desc flex flex-col gap-8 lg:gap-4">
//                 <p className="section-desc font-medium!">
//                   Nigeria Headquarters
//                 </p>
//                 <div className="flex gap-4 items-center">
//                   <PhoneIcon fill="#2F7BEB" size={24} color="#2F7BEB" />
//                   <a href="tel:+2349033930771">+234 9033930771</a>
//                 </div>
//                 <div className="flex gap-4 items-center">
//                   <Mail size={24} color="#2F7BEB" />
//                   <a href="mailto:support@jooav.com">support@jooav.com</a>
//                 </div>
//                 <div className="flex gap-4 items-center">
//                   <Clock size={24} color="#2F7BEB" />
//                   <span>Monday – Friday, 9:00 AM – 5:00 PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex-1 mb-6 lg:mb-0 mx-auto w-full bg-transparent">
//             <Image
//               src={"/our-office.webp"}
//               alt="Our Offices"
//               width={570}
//               height={553}
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurOffices;

"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";

const OurOffices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  const contactItems = [
    {
      icon: PhoneIcon,
      text: "+234 9033930771",
      href: "tel:+2349033930771",
      fill: true,
    },
    {
      icon: Mail,
      text: "support@jooav.com",
      href: "mailto:support@jooav.com",
      fill: false,
    },
    {
      icon: Clock,
      text: "Monday – Friday, 9:00 AM – 5:00 PM",
      href: null,
      fill: false,
    },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <motion.div
        className="max-w-[1158px] 2xl:max-w-[1316px] w-full mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 p-6 lg:p-0">
          <motion.div
            className="flex-1 lg:flex justify-center lg:justify-start items-center"
            variants={textVariants}
          >
            <div className="max-w-[417px] flex flex-col gap-10">
              <motion.h2
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Our Offices
              </motion.h2>

              <div className="font-normal! section-desc flex flex-col gap-8 lg:gap-4">
                <motion.p
                  className="section-desc font-medium!"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Nigeria Headquarters
                </motion.p>

                {contactItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex gap-4 items-center"
                      custom={i}
                      variants={contactItemVariants}
                      whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    >
                      <motion.div variants={iconVariants} whileHover="hover">
                        <Icon
                          fill={item.fill ? "#2F7BEB" : "none"}
                          size={24}
                          color="#2F7BEB"
                        />
                      </motion.div>
                      {item.href ? (
                        <motion.a
                          href={item.href}
                          whileHover={{
                            color: "#2F7BEB",
                            transition: { duration: 0.3 },
                          }}
                        >
                          {item.text}
                        </motion.a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 mb-6 lg:mb-0 mx-auto w-full bg-transparent"
            variants={imageVariants}
          >
            <Image
              src={"/our-office.webp"}
              alt="Our Offices"
              width={570}
              height={553}
              className="w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurOffices;
