"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { products } from "@/data/landing-page";

const WhatSetsUsApart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.6,
      },
    }),
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.4 + i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <motion.div
        className="max-w-[90%] w-full mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 p-6">
          <motion.div
            className="flex-4/10 mb-6 lg:mb-0 w-full mx-auto lg:mx-0 text-center lg:text-start"
            variants={headerVariants}
          >
            <motion.h3
              className="max-w-[414px] mx-auto lg:mx-0 text-[#383D46] font-semibold text-2xl md:text-[28px] lg:text-[32px] mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              What Sets Us Apart
            </motion.h3>
            <motion.p
              className="max-w-[90%] lg:max-w-[414px] mx-auto lg:mx-0 text-[#49505B] font-normal text-base md:text-sm lg:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We combine cutting-edge logistics, trusted partnerships, and
              real-time tracking to ensure your goods move safely and
              efficiently from manufacturers to retailers on time, every time.
            </motion.p>
          </motion.div>
          <div className="flex-6/10 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-4">
            <div className="grid grid-cols-1 mt-4 gap-4 bg-transparent">
              {products?.map((cp, i) => {
                const { value, desc } = cp;
                return (
                  <motion.div
                    key={i}
                    className="flex flex-col lg:flex-row lg:items-center gap-6 py-6 lg:py-0 border-b border-[#AFB3BA]"
                    custom={i}
                    variants={itemVariants}
                    whileHover={{
                      x: 10,
                      borderColor: "#2F7BEB",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="text-app-primary text-[32px] font-semibold pl-6"
                      custom={i}
                      variants={numberVariants}
                      whileHover={{
                        scale: 1.2,
                        color: "#51C4F3",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {i + 1}
                    </motion.div>
                    <motion.div
                      className="pb-2 flex-1 flex flex-col items-center lg:items-start text-center lg:text-start gap-2 max-w-[380px] lg:max-w-[600px] mx-auto"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                    >
                      <h3 className="text-xl lg:text-base xl:text-xl text-[#383D46] font-medium">
                        {value}
                      </h3>
                      <p className="text-[#49505B] text-base lg:text-sm xl:text-base font-normal">
                        {desc}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatSetsUsApart;