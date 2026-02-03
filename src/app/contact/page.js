import ContactSection from "@/components/home/ContactSection";

const ContactPage = () => {
  return (
    <>
      <ContactSection />

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.662121468006!2d87.28372377643548!3d26.818885076703182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef4175e4f26a95%3A0x9b8526c7c4c7bc1c!2sCode%20IT!5e0!3m2!1sen!2snp!4v1770130025989!5m2!1sen!2snp"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full rounded-xl"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
