"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { faqs } from "@/data/landing-page";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-[#FBFBFB]" ref={ref}>
      <motion.div
        className="max-w-[1158px] 2xl:max-w-[1316px] w-full mx-auto flex flex-col gap-8 p-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-4"
          variants={headerVariants}
        >
          <motion.h2
            className="max-w-[548px] mx-auto lg:mx-0 text-app-primary font-semibold text-2xl md:text-[28px] lg:text-[32px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="max-w-[90%] lg:max-w-[548px] mx-auto lg:mx-0 section-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Find quick answers to common questions about our freight services
            from shipping and tracking to safety and delivery timelines. We make
            your delivery process smooth and reliable.
          </motion.p>
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6">
          <motion.div
            className="flex-1 w-full mx-auto lg:w-full"
            variants={imageVariants}
          >
            <Image
              src={"/faq.webp"}
              alt="Frequently Asked Questions"
              width={578}
              height={545}
              className="w-full"
            />
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col justify-start text-start gap-4 lg:pl-3 xl:pl-8"
            variants={accordionVariants}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="faq-1"
            >
              {faqs?.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <AccordionItem value={`faq-${i + 1}`}>
                    <AccordionTrigger className={`${i === 0 ? "pt-0" : ""}`}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 w-full max-w-[85%]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;