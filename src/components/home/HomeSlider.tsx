"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slides } from "@/data/landing-page";


export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      if (newDirection === 1) {
        return prev === slides.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
    });
  };

  return (
    <div className="relative w-full h-150 lg:h-175 max-h-[80vh] lg:max-h-screen xl:max-h-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(254, 250, 235, 0.17) 0%, rgba(45, 140, 255, 0.66) 40%, rgba(45, 140, 255, .9) 100%), url(${slides[currentSlide].image})`,
              }}
            >
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto h-full flex items-end p-6 sm:p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col mdx:flex-row justify-between gap-6 w-full items-center"
              >
                <div className="max-w-md md:max-w-xl lg:max-w-3xl flex flex-col gap-3 text-center mdx:text-start">
                  <h2 className="text-4xl md:text-5xl font-semibold text-[#FEFAEB]">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-lg md:text-xl text-white">
                    {slides[currentSlide].description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => paginate(-1)}
                    className="w-10 h-10 rounded-full bg-[#51C4F3] shadow-lg flex items-center justify-center hover:bg-app-primary transition-colors"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft className="w-5! h-5! text-white" />
                  </Button>

                  {/* Progress Indicators */}
                  <div className="flex gap-1">
                    {slides.map((_, index) => (
                      <Button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentSlide ? 1 : -1);
                          setCurrentSlide(index);
                        }}
                        className={`h-2 p-0! rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "w-12 bg-app-secondary"
                            : "w-6 bg-[#3a91ed]"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={() => paginate(1)}
                    className="w-10 h-10 rounded-full bg-[#51C4F3] shadow-lg flex items-center justify-center hover:bg-app-primary transition-colors"
                    aria-label="Next slide"
                  >
                    <ArrowRight className="w-5! h-5! text-white" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
