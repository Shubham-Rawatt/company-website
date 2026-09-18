import React from "react";
import { motion } from "motion/react";
import { stats } from "../../data/stats";

const StatsCard = () => {
  return (
    <section className="bg-black px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: i * 0.30,
            }}
            className="rounded-3xl bg-white p-8 text-center"
          >
            <h2 className="text-5xl font-bold text-black">
              {stat.value}
            </h2>

            <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-[#99652f]">
              {stat.label}
            </p>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCard;