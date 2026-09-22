import React from "react";
import {FiMapPin,FiMail,FiPhone,FiArrowRight,FiLinkedin, FiFacebook,} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] px-6 pt-14 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 pb-12 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Tech <span className="text-cyan-400">Couples</span>
          </h2>

          <p className="mt-7 max-w-xs text-sm leading-6">
            Digital solutions engineered to empower businesses and elevate
            systemic operations across global industries.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex gap-3">
              <FiMapPin className="mt-1 shrink-0 text-[#a8733b]" />
              <p>
                WZ-73, 2nd floor, Nangli Jaleeb, Janakpuri,
                <br />
                New Delhi, Delhi 110058
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-[#a8733b]" />
              <p>gulKshay@techcouples.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-[#a8733b]" />
              <p>+91 9643511611</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] text-white">
            QUICK LINKS
          </h3>

          <div className="mt-7 space-y-4 text-sm">
            <a href="#" className="block hover:text-white">
              Home
            </a>
            <a href="#" className="block hover:text-white">
              About Us
            </a>
            <a href="#" className="block hover:text-white">
              Career page
            </a>
            <a href="#" className="block hover:text-white">
              Our Services
            </a>
            <a href="#" className="block hover:text-white">
              Blogs
            </a>
            <a href="#" className="block hover:text-white">
              Contact Us
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] text-white">
            SERVICES
          </h3>

          <div className="mt-7 space-y-4 text-sm">
            <a href="#" className="block hover:text-white">
              App Development
            </a>
            <a href="#" className="block hover:text-white">
              Software Development
            </a>
            <a href="#" className="block hover:text-white">
              Cloud Solutions
            </a>
            <a href="#" className="block hover:text-white">
              AI & ML Solutions
            </a>
            <a href="#" className="block hover:text-white">
              DevOps & Security
            </a>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] text-white">
            READY TO START?
          </h3>

          <p className="mt-5 text-sm leading-6">
            Let's discuss your project goals. Book a 15-minute consultation to
            see how we can bring your vision to life.
          </p>

          <button className="mt-6 flex items-center gap-3 rounded-lg bg-[#a8753e] px-6 py-3 text-sm font-medium text-white hover:bg-[#b7834d]">
            Book a Consultation
            <FiArrowRight />
          </button>

          <div className="mt-8 flex items-center gap-4 text-xs">
            <span className="tracking-[0.15em]">CONNECT</span>

            <span className="h-px w-32 bg-[#292929]"></span>

            <FiLinkedin className="text-gray-500 hover:text-white" />
            <FiFacebook className="text-gray-500 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#242424] py-7 text-xs text-gray-500">
        © 2026 TechCouples. All product architectures reserved.
      </div>
    </footer>
  );
};

export default Footer;
