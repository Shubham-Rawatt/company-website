import ServicesCard from './servicecard'
// import { FiArrowDown } from "react-icons/fi";

const WhatWeDo = () => {
  return (
     <section className="bg-white px-6 py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl text-center">

        {/* Small Heading */}
        <p className="text-[11px] font-medium uppercase tracking-[4px] text-[#9a6330]">
          WHAT WE DO
        </p>

        {/* Small Line */}
        <div className="mx-auto mt-5 h-px w-12 bg-[#a56b2c]" />

        {/* Main Heading */}
        <h2 className="mx-auto mt-7 max-w-5xl text-[16px] font-bold leading-[1.08] tracking-[-1.5px] text-black sm:text-5xl md:text-[52px] lg:text-[54px]">
          Custom Software Development Services
          <br className="hidden sm:block" />
          Built Around Your Business
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-4xl text-md leading-4 text-gray-700 sm:text-base md:text-[17px] md:leading-8">
        TechCouples is a custom software development company helping startups, SMEs, and enterprises across Delhi NCR and global markets turn ideas into secure, scalable software. Our software development services span custom business software solutions, enterprise platforms, and AI-powered products, delivering long-term performance, security, and measurable business value.
        </p>
      </div>

        <ServicesCard  />
    </section>
  )
}

export default WhatWeDo