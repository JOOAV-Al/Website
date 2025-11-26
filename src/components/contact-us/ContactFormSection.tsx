"use client";
import { Button } from "@/components/ui/button";
import CustomLoader from "@/components/ui/CustomLoader";
import { SuccessDialog } from "@/components/ui/SuccessDialog";
import { useState } from "react";

const ContactFormSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // State for error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setIsPending(true);
    setErrors({}); // Reset errors

    // Validate fields
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
      setErrors(newErrors); // Set errors if any
      setIsPending(false);
      return; // Stop submission if there are errors
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
      // Handle successful submission (e.g., show a success message)
      console.log("Form submitted successfully!");
      console.log({ data, error });
      setOpen(true); // Open success dialog
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-[#EDF5FB]">
      <div className="max-w-[1158px] 2xl:max-w-[1316px] w-full mx-auto flex flex-col items-center lg:flex-row gap-12">
        <div className="flex-1 w-[90%] max-w-[454px] md:max-w-[600px] lg:max-w-[554px] mx-auto lg:mx-0 lg:w-full text-center lg:text-start flex flex-col gap-2">
          <h3 className="text-[#03365F] font-semibold text-[28px] md:text-[32px] lg:text-[40px]">
            Join the Jooav Inventory Early Access List
          </h3>
          <p className="lg:text-xl">
            We’re currently onboarding select FMCG retailers and wholesalers.
            Sign up below to receive early access and rollout updates.
          </p>
        </div>
        <SuccessDialog open={open} setOpen={setOpen} />
        <div className="flex-1 flex flex-col gap-8 max-w-[365px] lg:max-w-full mx-auto lg:mx-0 w-full lg:pl-12 px-6 lg:px-0">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center lg:justify-start gap-6"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-[#0A3150] font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your name"
                  className={`bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary ${
                    errors.firstName ? "border border-red-500" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-[#0A3150] font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your name"
                  className={`bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary ${
                    errors.lastName ? "border border-red-500" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#0A3150] font-medium" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="olivia@untitledui.com"
                  className={`bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
                  className={`bg-white rounded-lg px-4.5 py-4 focus:outline-app-primary ${
                    errors.businessName ? "border border-red-500" : ""
                  }`}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
                {errors.businessName && (
                  <p className="text-red-500 text-sm">{errors.businessName}</p>
                )}
              </div>
            </div>

            <Button variant={"primary"} className="mt-6 w-fit mx-auto lg:mx-0">
              Join the Waitlist {isPending && <CustomLoader color="white" />}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
