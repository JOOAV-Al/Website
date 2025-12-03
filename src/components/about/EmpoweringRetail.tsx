"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function EmpoweringRetail() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.3,
        },
      },
    };

    const headerVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
        },
      },
    };

    const logoVariants = {
      hidden: { opacity: 0, scale: 0.8, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    };
  return (
    <section className="py-20 bg-[#2F7BEB14]" ref={ref}>
      <motion.div className="max-w-[90%] w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-[726px] mx-auto section-header"
          >
            Empowering Smarter Retail in Africa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-[90%] lg:max-w-[750px] mx-auto section-desc"
          >
            Jooav was founded to solve Africa’s broken retail supply chain, we
            combine technology, logistics partnerships, and direct manufacturer
            access to empower retailers and wholesalers to grow profitably and
            sustainably.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex justify-center gap-12 items-center flex-wrap"
        >
          <motion.div
            // key={i}
            variants={logoVariants}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={"/fidson.svg"}
              alt={"FIDSON"}
              width={161}
              height={170}
              className="w-40 h-[170px]"
            />
          </motion.div>
          <motion.div
            // key={i}
            variants={logoVariants}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={"/expand-global.svg"}
              alt={"Expand Global"}
              width={259}
              height={122}
              className="w-65 h-[122px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
