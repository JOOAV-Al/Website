import { faqs } from "@/data/landing-page";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20 bg-[#FBFBFB]">
      <div className="max-w-[1158px] 2xl:max-w-[1316px]  w-full mx-auto flex flex-col gap-8 p-6">
        <div className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-start gap-4">
          <h2 className="max-w-[548px] mx-auto lg:mx-0 text-app-primary font-semibold text-2xl md:text-[28px] lg:text-[32px]">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[90%] lg:max-w-[548px] mx-auto lg:mx-0 section-desc">
            Find quick answers to common questions about our freight services
            from shipping and tracking to safety and delivery timelines. We make
            your delivery process smooth and reliable.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6">
          <div className="flex-1 w-full mx-auto lg:w-full">
            <Image
              src={"/faq.webp"}
              alt="Frequently Asked Questions"
              width={578}
              height={545}
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-start text-start gap-4 lg:pl-3 xl:pl-8">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {faqs?.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i + 1}`}>
                  <AccordionTrigger className={`${i === 0 ? "pt-0" : ""}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 w-full max-w-[85%]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
