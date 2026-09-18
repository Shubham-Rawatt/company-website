import React from "react";
import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import growth from "../../assets/images/growth.webp";
import DigitalCard from "./digitalcard";

const DigitalGrowth = () => {
  return (
    <section className="bg-[#faf9f6] px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#99652f]" />

            <p className="text-[11px] font-medium uppercase tracking-[4px] text-[#99652f]">
              DIGITAL GROWTH
            </p>
          </div>

          <h2 className="mt-7 max-w-xl text-3xl font-bold leading-[1.08] tracking-[-1.5px] text-[#061735] md:text-5xl">
            Why SEO & digital marketing matter for business growth
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-600">
            Most customers search before they contact a company. SEO helps your business 
            appear at that moment, while digital marketing keeps your brand visible across 
            search, content, and ads. As a Custom Software Development Company and Web 
            Development Company in Delhi, we make that growth practical-connecting the right
            audience to your brand, faster.
          </p>

          <button className="mt-8 flex items-center gap-3 rounded-full bg-linear-to-r from-[#99652f] to-[#d5ad3d] px-7 py-4 text-sm font-semibold text-white">
            Get Free SEO Consultation <FiArrowRight size={18} />
          </button>
        </div>

        {/* Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src={growth}
            alt="Digital Growth"
            className="w-full object-cover"
          />
        </motion.div>
      </div>

      <DigitalCard />
    </section>
  );
};

export default DigitalGrowth;
