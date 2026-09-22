// import React from "react";
// import { motion } from "motion/react";
// import { growthdata } from "../../data/growth";

// const DigitalCard = () => {
//   return (
//     <section className="px-6 py-14">
//       <div className="grid grid-cols-1  gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
//         {growthdata.map((growth, index) => (
//           // <motion.div
//           //   key={growth.id}
//           //   initial={{ opacity: 0, y: 30 }}
//           //   whileInView={{ opacity: 1, y: 0 }}
//           //   viewport={{ once: true, amount: 0.2 }}
//           //   transition={{
//           //     duration: 0.3,
//           //     delay: index * 0.05,
//           //     ease: "easeOut",
//           //   }}
//           //   whileHover={{
//           //     scale: 1.02,
//           //     y: -4,
//           //   }}
//           //   className="group relative mx-auto min-h-60 w-full max-w-90 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
//           // >
//           <motion.div
//   key={growth.id}
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true, amount: 0.2 }}
//   transition={{
//     duration: 0.3,
//     delay: index * 0.05,
//     ease: "easeOut",
//   }}
//   whileHover={{
//     scale: 1.02,
//     y: -4,
//     transition: {
//       duration: 0.15,
//       ease: "easeOut",
//     },
//   }}
//   className="group relative mx-auto min-h-60 w-full max-w-90 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-blue-400 hover:shadow-lg"
// >
//             {/* Top */}
//             <div className="flex items-start justify-between">
//               <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
//                 <growth.icon className="h-5 w-5" />
//               </span>
//             </div>

//             {/* Content */}
//             <div className="mt-6">
//               <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
//                 {growth.title}
//               </h2>

//               <p className="text-sm leading-6 text-gray-500">
//                 {growth.description}
//               </p>
//             </div>

//             {/* Corner Gradient */}
//             <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-blue-100 opacity-40 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-70" />

//             {/* Bottom Border */}
//             <motion.div
//               className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
//               initial={{ width: 0 }}
//               whileHover={{ width: "100%" }}
//               transition={{ duration: 0.35 }}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default DigitalCard;

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
