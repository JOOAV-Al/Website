"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { partners } from "@/data/landing-page";
import Image from "next/image";

const Partners = () => {
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
    <section className="py-20 bg-[#FEFAEB]" ref={ref}>
      <motion.div
        className="max-w-[1316px] w-full mx-auto flex flex-col gap-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div
          className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center"
          variants={headerVariants}
        >
          <motion.h3
            className="max-w-[726px] mx-auto section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Partners and Recognition
          </motion.h3>
          <motion.p
            className="max-w-[90%] lg:max-w-[726px] mx-auto section-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hear directly from our customers as they share their experiences,
            stories, and successes. Their words inspire us to keep delivering
            the best every day.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-[90%] lg:max-w-[890px] mx-auto flex justify-center items-center gap-12 flex-wrap"
          variants={containerVariants}
        >
          {partners.map((p, i) => (
            <motion.div
              key={i}
              variants={logoVariants}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={p}
                alt="Partners"
                width={277}
                height={125}
                className="w-[170px] h-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Partners;