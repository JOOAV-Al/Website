"use client";

import { theTeam } from "@/data/landing-page";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TheTeam() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Container animation for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual team member card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[90%] w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center"
        >
          <h2 className="max-w-[726px] mx-auto section-header">
            Meet the Team
          </h2>
          <p className="max-w-[90%] lg:max-w-[750px] mx-auto section-desc">
            The people powering every mile experts in logistics, committed to
            excellence, and driven to deliver beyond boundaries.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 mdx:grid-cols-2 gap-x-16 gap-y-20"
        >
          {theTeam?.map((member, i) => {
            const { role, name, imageDesktop, imageMobile, desc } = member;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col mdx:flex-row justify-center gap-6 items-center"
              >
                {/* Image Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full max-w-30 h-auto mx-auto mdx:mx-0"
                >
                  {/* Mobile Image - Hidden on mdx and up */}
                  <Image
                    src={imageMobile}
                    alt={name}
                    width={300}
                    height={300}
                    className="w-50 h-full hidden max-mdx:block rounded-lg"
                  />
                  {/* Desktop Image - Shown on mdx and up */}
                  <Image
                    src={imageDesktop}
                    alt={name}
                    width={300}
                    height={300}
                    className="w-50 h-full hidden mdx:block rounded-lg"
                  />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-1 text-center mdx:text-start"
                >
                  <h3 className="text-xl font-semibold text-[#383D46]">
                    {name}
                  </h3>
                  <h4 className="text-lg font-medium text-app-primary">
                    {role}
                  </h4>
                  <p className="text-base font-normal text-[#49505B] max-w-76.5">
                    {desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}