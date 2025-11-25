"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactFormSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const formData = {
      fullName,
      email,
      businessName,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful submission (e.g., show a success message)
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <section id="contact-form" className="py-20 bg-[#EDF5FB]">
      <div className="max-w-[1158px] w-full mx-auto flex flex-col items-center lg:flex-row gap-12">
        <div className="flex-1 w-[90%] max-w-[454px] md:max-w-[600px] lg:max-w-[454px] mx-auto lg:mx-0 lg:w-full text-center lg:text-start flex flex-col gap-2">
          <h3 className="text-[#03365F] font-semibold text-[28px] md:text-[32px] lg:text-[40px]">
            Join the Jooav Inventory Early Access List
          </h3>
          <p className="lg:text-xl">
            We’re currently onboarding select FMCG retailers and wholesalers.
            Sign up below to receive early access and rollout updates.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-8 max-w-[365px] lg:max-w-full mx-auto lg:mx-0 w-full lg:pl-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center lg:justify-start gap-6"
          >
            <div className="flex flex-col-reverse md:flex-row justify-between gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="text-[#0A3150] font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your name"
                  className="bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#0A3150] font-medium" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="olivia@untitledui.com"
                  className="bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label
                className="text-[#0A3150] font-medium"
                htmlFor="businessName"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                placeholder="Jooav"
                className="bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary"
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <Button variant={"primary"} className="mt-8 w-fit mx-auto lg:mx-0">
              Join the Waitlist
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
