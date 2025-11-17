"use client"

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/landing-page';
import { Button } from '@/components/ui/button';

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1316px] w-full mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex-1 flex flex-col gap-3 md:gap-1 justify-center text-center">
          <h2 className="text-[#51C4F3] font-medium text-lg">TESTIMONIALS</h2>
          <h3 className="max-w-[726px] mx-auto section-header">
            What Our Customers Says
          </h3>
          <p className="max-w-[90%] lg:max-w-[726px] mx-auto section-desc">
            Hear directly from our customers as they share their experiences,
            stories, and successes. Their words inspire us to keep delivering
            the best every day.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full mx-auto">
          {/* Edge Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none hidden md:block" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => {
                const isCenter = index === selectedIndex;
                // const distance = Math.abs(index - selectedIndex);

                return (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_400px] pl-4 min-w-0"
                  >
                    <Card
                      className={` py-0 h-full transition-all duration-500 bg-[#2F7BEB14] ${
                        isCenter
                          ? "opacity-100 scale-100 shadow-sm"
                          : "opacity-70 scale-95 shadow-xs"
                      }`}
                    >
                      <CardContent className="flex flex-col gap-6 p-6">
                        {/* Rating Stars */}
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-yellow-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>

                        {/* Testimonial Content */}
                        <blockquote className="text-[#49505B] text-xl leading-relaxed">
                          {testimonial.content}
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-app-primary">
                            {testimonial.name}, {testimonial.role}
                          </p>
                          <Quote
                            fill="#51C4F3"
                            className="w-6 h-6 text-[#51C4F3] ml-auto"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-1 mt-8">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 p-0 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-12 bg-app-secondary"
                    : "w-6 bg-[#51C4F3]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}