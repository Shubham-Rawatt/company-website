import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import img2 from "../../assets/images/hero1.webp";
import img1 from "../../assets/images/hero2.webp";
import img3 from "../../assets/images/hero3.webp";

const slides = [
  {
    image: img1,
    category: "DIGITAL MARKETING",
    title: "Digital Marketing Strategies That Turn Traffic Into Revenue",
    description:
      "TechCouples pairs data-driven digital marketing with the technical depth of a custom software development company, helping businesses convert visibility into measurable results. Our team combines SEO, paid campaigns, and content strategy with the same engineering rigor we bring to enterprise platforms.",
  },
  {
    image: img2,
    category: "WEB DEVELOPMENT",
    title: "Powerful Websites Built For Performance and Business Growth",
    description:
      "As a website development company in Delhi, TechCouples designs and develops modern web applications and custom business software solutions built for speed, security, and long-term reliability. Every project is engineered to give business owners a dependable digital foundation that supports sustained growth.",
  },
  {
    image: img3,
    category: "MOBILE APP DEVELOPMENT",
    title: "Transforming Ideas Into High-Performance Mobile Apps",
    description:
      "TechCouples is a mobile app development company that builds scalable applications for startups, SMEs, and enterprises across Delhi NCR and beyond. Our software development services span native iOS and Android products to cross-platform tools, engineered for performance, security, and long-term business growth.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[550px] max-h-[720px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Overall Dark Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Left Dark Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/10" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/45 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="w-full max-w-180 text-white"
          >
            {/* CATEGORY */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-5 text-[11px] font-semibold tracking-[4px] text-gray-200 sm:text-xs"
            >
              {slide.category}
            </motion.p>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-175 text-[38px] font-bold leading-[1.02] tracking-[-1px] sm:text-[46px] md:text-[52px] lg:text-[56px]"
            >
              {slide.title}
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 max-w-162.5 text-sm font-medium leading-[1.65] text-gray-200 sm:text-[15px] md:text-base"
            >
              {slide.description}
            </motion.p>

            {/* BUTTON */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#a56b2c] to-[#d5ae45] px-7 py-3.5 text-xs font-semibold tracking-wide text-white shadow-lg"
            >
              CONTACT FOR DETAILS
              <FiArrowRight size={17} />
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= PREVIOUS BUTTON ================= */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-8"
      >
        <FiChevronLeft size={19} />
      </button>

      {/* ================= NEXT BUTTON ================= */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-8"
      >
        <FiChevronRight size={19} />
      </button>

      {/* ================= PROGRESS INDICATORS ================= */}
      {/* <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === index
                ? "w-11 bg-white"
                : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div> */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      aria-label={`Go to slide ${index + 1}`}
      className={`h-1.5 rounded-full transition-all duration-200 ${
        current === index ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70" }`} /> ))}
</div>  
    </section>
  );
};

export default Hero;
