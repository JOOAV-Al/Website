"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NavButton from "@/components/ui/NavButton";
import { coreValues } from "@/data/landing-page";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CoreValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="py-20 bg-white" ref={ref}>
      <motion.div
        className="max-w-[1216px] w-full mx-auto flex flex-col gap-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="bg-[#FEFAEB] flex flex-col lg:flex-row justify-between gap-12 p-6"
          variants={itemVariants}
        >
          <motion.div
            className="flex-1 w-[90%] mx-auto lg:w-full bg-transparent"
            variants={imageVariants}
          >
            <Image
              src={"/core-values.webp"}
              alt="Core Values"
              width={640}
              height={400}
              className="w-full"
            />
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-4 lg:gap-6"
            variants={textVariants}
          >
            <motion.h2
              className="text-[#51C4F3] font-medium text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              OUR CORE VALUE
            </motion.h2>
            <motion.h3
              className="max-w-[548px] mx-auto lg:mx-0 section-header"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Expertly Managing Every Step From Transit to Warehousing
            </motion.h3>
            <motion.p
              className="max-w-[90%] lg:max-w-[548px] mx-auto section-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              We expertly manage every stage of your logistics journey from
              secure and efficient transit to organized, technology driven
              warehousing. Our team ensures your goods are handled with
              precision, tracked in real time, and delivered safely to their
              destination. With a focus on reliability, transparency, and speed,
              we make every step seamless so you can focus on your business
              while we take care of the rest.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <NavButton
                route="/solutions"
                variant={"ghost"}
                className="text-app-secondary w-fit mx-auto lg:mx-0 lg:mr-auto xl:mt-4"
              >
                Learn More <ArrowRight />
              </NavButton>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 mdl:grid-cols-2 mdx:grid-cols-3 lg:grid-cols-4 p-6 gap-8 bg-white"
          variants={containerVariants}
        >
          {coreValues?.map((cv, i) => {
            const { value, desc } = cv;
            return (
              <motion.div
                key={i}
                className="flex flex-col lg:flex-row gap-6 flex-nowrap py-6"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="h-fit lg:h-full w-25 mx-auto lg:max-w-fit lg flex flex-row-reverse lg:flex-col">
                  <motion.span
                    className="bg-[#2F7BEB0F] min-w-[50%] lg:min-w-0.5 min-h-0.5 lg:min-h-[50%]"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  />
                  <motion.span
                    className="bg-app-secondary min-w-[25%] lg:min-w-0.5 min-h-0.5 lg:min-h-[25%]"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  />
                  <motion.span
                    className="bg-[#2F7BEB0F] min-w-[25%] lg:min-w-0.5 min-h-0.5 lg:min-h-[25%]"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                  />
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-3 max-w-[280px] lg:max-w-full mx-auto">
                  <h3 className="text-xl text-app-primary font-medium">
                    {value}
                  </h3>
                  <p className="text-base font-normal">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoreValues;