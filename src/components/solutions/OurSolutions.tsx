"use client";

import NavButton from "@/components/ui/NavButton";
import { ourSolutions } from "@/data/landing-page";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurSolutions() {
  return (
    <section
      id="all-solutions"
      className="py-20 bg-white lg:px-8 bg-none lg:bg-[url(/large-joav-logo.svg)]"
    >
      <div className="max-w-[90%] lg:max-w-[1241px] w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center"
        >
          <h2 className="max-w-[726px] mx-auto section-header">
            Our Solutions
          </h2>
          <p className="max-w-[90%] w-[1254px] mx-auto section-desc">
            At Jooav, we're building Africa's Virtual Depot a seamless ecosystem
            connecting manufacturers, distributors, and retailers through
            technology, logistics, and financial innovation. Our solutions
            integrate both digital tools and real-world infrastructure, giving
            businesses visibility, speed, and access to the resources they need
            to grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-20 lg:gap-24">
          {ourSolutions?.map((cp, i) => {
            const { value, desc, image, points, withCTAs } = cp;
            const isReversed = i % 2 == 1;

            return (
              <SolutionCard
                key={i}
                value={value}
                desc={desc}
                image={image}
                points={points}
                withCTAs={withCTAs}
                isReversed={isReversed}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Separate component for each solution card with animation
function SolutionCard({
  value,
  desc,
  image,
  points,
  withCTAs,
  isReversed,
  index,
}: {
  value: string;
  desc: string;
  image: string;
  points: string[];
  withCTAs?: boolean;
  isReversed: boolean;
  index: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: isReversed ? 20 : -20 },
    visible: { opacity: 1, x: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: isReversed ? -20 : 20 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col items-center ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:flex-row gap-6 lg:gap-12`}
    >
      {/* Image with animation */}
      <motion.div
        variants={imageVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 w-[90%] lg:mb-0 mx-auto lg:w-full bg-transparent"
      >
        <Image
          src={image}
          alt={value}
          width={601}
          height={486}
          className="w-full"
        />
      </motion.div>

      {/* Content with animation */}
      <motion.div
        variants={contentVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex flex-col gap-8 flex-nowrap"
      >
        <div className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-2">
          <h2 className="max-w-[548px] mx-auto lg:mx-0 text-app-primary font-semibold text-2xl md:text-[28px] lg:text-[32px]">
            {value}
          </h2>
          <p className="max-w-[90%] lg:max-w-[562px] mx-auto lg:mx-0 section-desc">
            {desc}
          </p>
        </div>

        {/* Points with stagger animation */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-4 lg:gap-8"
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row flex-nowrap gap-2"
            >
              <div className="mx-auto lg:mx-0">
                <Image
                  src={"/arr.png"}
                  alt={p}
                  width={24}
                  height={24}
                  className="w-6 h-6 rotate-90 lg:rotate-0"
                />
              </div>
              <p className="text-[#49505B] text-base lg:text-sm xl:text-base text-center lg:text-start font-normal max-w-[394px] lg:max-w-[526px] mx-auto lg:mx-0">
                {p}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons with animation */}
        {withCTAs ? (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-start items-center gap-x-3 gap-y-[29px] flex-wrap mt-4"
          >
            <NavButton route="/products">Explore Jooav Inventory</NavButton>
            <NavButton
              route="/contact-us/#contact-form"
              className="ring"
              variant={"accent"}
            >
              Join the waitlist
            </NavButton>
          </motion.div>
        ) : (
          <p className="text-app-secondary italic text-center lg:text-start font-medium mt-4">
            Coming soon
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}