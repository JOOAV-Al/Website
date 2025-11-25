import ContactFormSection from "@/components/contact-us/ContactFormSection";
import ContactUsHero from "@/components/contact-us/ContactUsHero"
import OurOffices from "@/components/contact-us/OurOffices";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactUsHero />
      <ContactFormSection />
      <OurOffices />
    </div>
  );
}

export default ContactUsPage