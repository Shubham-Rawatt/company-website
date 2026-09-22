import React from "react";
import ContactCard from "./contactcard";
import ContactForm from "./contactform";

const Contact = () => {
  return (
    <section className="bg-[#f7f5f0] px-5 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ddd8cf] bg-white px-4 py-1.5 text-xs text-[#8f633d] shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c9a27e]"></span>
          FREE PROJECT CONSULTATION
        </div>

        <p className="text-5xl text-[#000000] font-semibold md:text-4xl">
          Contact Us -
          <span className="ml-2 font-serif font-medium italic text-[#9a6330]">
            Let's Start Your Project
          </span>
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-[450] leading-7 text-[#344054]">
          Looking to hire a professional web development company? Share your
          project details and our expert team will get back to you within 24
          hours with a free consultation and a custom quote.
        </p>
      </div>

       <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 mt-15">
        <ContactCard />
        <ContactForm />
       </div>

    </section>
  );
};

export default Contact;
