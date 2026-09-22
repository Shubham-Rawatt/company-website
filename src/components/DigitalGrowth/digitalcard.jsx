import React from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { growthdata } from "../../data/growth";

const DigitalCard = () => {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {growthdata.map((growth, index) => {
          const Icon = growth.icon;

          return (
            <motion.div
              key={growth.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.15,
                  ease: "easeOut",
                },
              }}
              className="group relative mx-auto flex min-h-64 w-full max-w-90 flex-col overflow-hidden rounded-2xl border border-[#e7e0d7] bg-white p-6 shadow-sm hover:border-[#c9a06a] hover:shadow-lg"
            >
              {/* Soft Background Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#f1e5d6] opacity-50 blur-2xl transition-all duration-300 group-hover:scale-125 group-hover:opacity-80" />

              {/* Icon */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e7e0d7] bg-[#faf7f2] text-[#99652f] transition-all duration-200 group-hover:border-[#c9a06a] group-hover:bg-[#99652f] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#eee8e1] text-gray-400 transition-all duration-200 group-hover:border-[#c9a06a] group-hover:text-[#99652f]">
                  <FiArrowUpRight size={15} />
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <h2 className="text-[20px] font-semibold tracking-[-0.3px] text-[#171717]">
                  {growth.title}
                </h2>

                <p className="mt-3 text-[14px] leading-6 text-gray-500">
                  {growth.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="relative mt-auto pt-7">
                <div className="h-px w-full bg-[#eee8e1]" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-[1.4px] text-gray-400 transition-colors duration-200 group-hover:text-[#99652f]">
                    EXPLORE SERVICE
                  </span>

                  <span className="text-xs text-gray-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#99652f]">
                    →
                  </span>
                </div>
              </div>

              {/* Bottom Hover Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-[#99652f]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.15 }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DigitalCard;
