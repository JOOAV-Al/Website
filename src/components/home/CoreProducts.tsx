"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NavButton from "@/components/ui/NavButton";
import { coreProducts } from "@/data/landing-page";
import Image from "next/image";

const CoreProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const productItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="py-20 bg-[#2F7BEB14]" ref={ref}>
      <motion.div
        className="max-w-[1316px] w-full mx-auto flex flex-col gap-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 p-6">
          <motion.div
            className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-4"
            variants={textVariants}
          >
            <motion.h2
              className="text-[#51C4F3] font-medium text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              OUR CORE PRODUCT
            </motion.h2>
            <motion.h3
              className="max-w-[548px] mx-auto lg:mx-0 text-[#383D46] font-semibold text-2xl md:text-[28px] lg:text-[32px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Meet Jooav Inventory (Jooav ERP)
            </motion.h3>
            <motion.p
              className="max-w-[90%] lg:max-w-[548px] mx-auto lg:mx-0 text-[#49505B] font-normal text-base md:text-sm lg:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Jooav Inventory is the backbone of modern African commerce. Our
              mobile-first ERP platform enables FMCG retailers and wholesalers
              to monitor stock, restock directly from manufacturers, and manage
              operations effortlessly in one simple, intelligent dashboard.
            </motion.p>
            <div className="grid grid-cols-1 mt-4 gap-8 lg:gap-0 bg-transparent">
              {coreProducts?.map((cp, i) => {
                const { value, desc, icon } = cp;
                return (
                  <motion.div
                    key={i}
                    className="flex flex-col lg:flex-row gap-6 flex-nowrap py-6 lg:py-0"
                    custom={i}
                    variants={productItemVariants}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div>
                      <motion.div
                        className="flex justify-center items-center w-14 h-14 lg:w-10 lg:h-10 xl:w-14 xl:h-14 rounded-full bg-app-primary mx-auto"
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        <Image
                          src={icon}
                          alt={value}
                          width={24}
                          height={24}
                          className="w-6 h-6 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
                        />
                      </motion.div>
                      {i !== coreProducts.length - 1 && (
                        <motion.div
                          className="w-px hidden lg:block h-full mx-auto"
                          initial={{ scaleY: 0 }}
                          animate={isInView ? { scaleY: 1 } : {}}
                          transition={{ delay: 0.7 + i * 0.2, duration: 0.5 }}
                        >
                          <Image
                            src={"/line-main.png"}
                            alt={value}
                            width={1}
                            height={24}
                            className="w-full h-10 xl:h-15"
                          />
                        </motion.div>
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
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            className="flex-1 w-[90%] mb-6 lg:mb-0 mx-auto lg:w-full bg-transparent"
            variants={imageVariants}
          >
            <Image
              src={"/core-products.png"}
              alt="Core Products"
              width={640}
              height={605}
              className="w-full"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <NavButton
            className="w-fit mx-auto block"
            route="/products"
            variant="primary"
          >
            Explore Jooav Inventory
          </NavButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreProducts;