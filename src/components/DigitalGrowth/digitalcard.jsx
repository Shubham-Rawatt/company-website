import React from "react";
import { motion } from "motion/react";
import { growthdata } from "../../data/growth";

const DigitalCard = () => {
  return (
    <section className="px-6 py-14">
      <div className="grid grid-cols-1  gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {growthdata.map((growth, index) => (
          <motion.div
            key={growth.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              y: -4,
            }}
            className="group relative mx-auto min-h-60 w-full max-w-90 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <growth.icon className="h-5 w-5" />
              </span>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {growth.title}
              </h2>

              <p className="text-sm leading-6 text-gray-500">
                {growth.description}
              </p>
            </div>

            {/* Corner Gradient */}
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-blue-100 opacity-40 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-70" />

            {/* Bottom Border */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
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
