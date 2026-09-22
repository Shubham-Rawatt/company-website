import React from "react";
import { motion } from "motion/react";
import { FiStar } from "react-icons/fi";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-[#f8f7f3] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <FiStar className="text-[13px] text-[#9a7045]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-700">
              PROVEN VALIDATION
            </span>
          </div>

          <h4 className="font-medium tracking-[-0.04em] text-gray-900 sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="italic font-normal text-red-500">Trusted</span>{" "}
            Clients Say
          </h4>
        </div>

        {/* Cards */}

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-10 gap-y-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group relative w-full rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Review */}
              <p className="relative z-10 text-[15px] leading-6 text-gray-600">
                “{testimonial.review}”
              </p>

              {/* Quote */}
              <div className="absolute right-7 top-5 font-serif text-7xl text-gray-100">
                “
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-gray-200" />

              {/* Client */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="h-11 w-11 overflow-hidden rounded-full border border-gray-200"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
