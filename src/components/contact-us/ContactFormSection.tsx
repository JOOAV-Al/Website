"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import CustomLoader from "@/components/ui/CustomLoader";
import { SuccessDialog } from "@/components/ui/SuccessDialog";

const ContactFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setErrors({});

    const newErrors: { [key: string]: string } = {};
    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!businessName) newErrors.businessName = "Business name is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsPending(false);
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      businessName,
    };

    try {
      const response = await fetch("/api/mailchimp/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      const { data, error } = json;
      console.log("Form submitted successfully!");
      console.log({ data, error });
      setOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsPending(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="contact-form" className="py-20 bg-[#EDF5FB]" ref={ref}>
      <motion.div
        className="max-w-[1158px] 2xl:max-w-[1316px] w-full mx-auto flex flex-col items-center lg:flex-row gap-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex-1 w-[90%] max-w-[454px] md:max-w-[600px] lg:max-w-[554px] mx-auto lg:mx-0 lg:w-full text-center lg:text-start flex flex-col gap-2"
          variants={headerVariants}
        >
          <motion.h3
            className="text-[#03365F] font-semibold text-[28px] md:text-[32px] lg:text-[40px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join the Jooav Inventory Early Access List
          </motion.h3>
          <motion.p
            className="lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We're currently onboarding select FMCG retailers and wholesalers.
            Sign up below to receive early access and rollout updates.
          </motion.p>
        </motion.div>

        <SuccessDialog open={open} setOpen={setOpen} />

        <motion.div
          className="flex-1 flex flex-col gap-8 max-w-[365px] lg:max-w-full mx-auto lg:mx-0 w-full lg:pl-12 px-6 lg:px-0"
          variants={formVariants}
        >
          <div className="flex flex-col justify-center lg:justify-start gap-6">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <motion.div
                className="flex-1 flex flex-col gap-2"
                custom={0}
                variants={inputVariants}
              >
                <label
                  htmlFor="firstName"
                  className="text-[#0A3150] font-medium"
                >
                  First Name
                </label>
                <motion.input
                  type="text"
                  id="firstName"
                  placeholder="Enter your name"
                  className={`bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary transition-all ${
                    errors.firstName ? "border border-red-500" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(47, 123, 235, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                />
                {errors.firstName && (
                  <motion.p
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.firstName}
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex-1 flex flex-col gap-2"
                custom={1}
                variants={inputVariants}
              >
                <label
                  htmlFor="lastName"
                  className="text-[#0A3150] font-medium"
                >
                  Last Name
                </label>
                <motion.input
                  type="text"
                  id="lastName"
                  placeholder="Enter your name"
                  className={`bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary transition-all ${
                    errors.lastName ? "border border-red-500" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(47, 123, 235, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                />
                {errors.lastName && (
                  <motion.p
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.lastName}
                  </motion.p>
                )}
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <motion.div
                className="flex-1 flex flex-col gap-2"
                custom={2}
                variants={inputVariants}
              >
                <label className="text-[#0A3150] font-medium" htmlFor="email">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  placeholder="olivia@untitledui.com"
                  className={`bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary transition-all ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                  onChange={(e) => setEmail(e.target.value)}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(47, 123, 235, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                />
                {errors.email && (
                  <motion.p
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex-1 flex flex-col gap-2"
                custom={3}
                variants={inputVariants}
              >
                <label
                  className="text-[#0A3150] font-medium"
                  htmlFor="businessName"
                >
                  Business Name
                </label>
                <motion.input
                  type="text"
                  id="businessName"
                  placeholder="Jooav"
                  className={`bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary transition-all ${
                    errors.businessName ? "border border-red-500" : ""
                  }`}
                  onChange={(e) => setBusinessName(e.target.value)}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(47, 123, 235, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                />
                {errors.businessName && (
                  <motion.p
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.businessName}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                variant={"primary"}
                className="mt-6 w-fit mx-auto lg:mx-0"
                onClick={handleSubmit}
              >
                Join the Waitlist {isPending && <CustomLoader color="white" />}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactFormSection;