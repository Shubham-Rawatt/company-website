
import React from "react";
import { motion } from "motion/react";
import { growthdata } from "../../data/growth";

const DigitalCard = () => {
  return (
    <section className="py-14">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {growthdata.map((growth, index) => (
          <motion.div
            key={growth.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.025,
              y: -4,
            }}
            className="group relative min-h-[290px] w-full max-w-[320px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                0{growth.id}
              </span>

              <span className="text-sm font-medium text-gray-400">
                0{growth.id}
              </span>
            </div>

            {/* Content */}
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold tracking-tight text-gray-900">
                {growth.title}
              </h2>

              <p className="text-sm leading-6 text-gray-500">
                {growth.description}
              </p>
            </div>

            {/* Learn More */}
            <motion.div
              className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-medium text-blue-600"
              whileHover={{ x: 4 }}
            >
              Learn more
              <span className="text-base">→</span>
            </motion.div>

            {/* Corner Gradient */}
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-blue-100 opacity-40 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-70" />

            {/* Bottom Border */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DigitalCard;

