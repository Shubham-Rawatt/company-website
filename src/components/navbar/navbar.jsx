import { useState } from "react";
import { FiChevronDown, FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="bg-[#111111] px-10 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold text-cyan-400">∞</span>

          <span className="text-lg font-bold text-white">
            Tech<span className="text-cyan-400">Couples</span>
          </span>
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="text-sm font-semibold text-white hover:text-cyan-400"
          >
            Home
          </a>

          {/* Services */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-white hover:text-cyan-400"
            >
              Services
              <FiChevronDown />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-8 w-48 rounded-lg bg-white p-2 shadow-lg">
                <a href="#" className="block rounded px-3 py-2 hover:bg-gray-100">Web Development</a>

                <a
                  href="#"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                >
                  App Development
                </a>

                <a
                  href="#"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                >
                  UI/UX Design
                </a>
              </div>
            )}
          </div>

          {/* Products */}
          <div className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-white hover:text-cyan-400"
            >
              Products
              <FiChevronDown />
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-8 w-48 rounded-lg bg-white p-2 shadow-lg">
                <a
                  href="#"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                >
                  SaaS Products
                </a>

                <a
                  href="#"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                >
                  AI Products
                </a>

                <a
                  href="#"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                >
                  Enterprise Solutions
                </a>
              </div>
            )}
          </div>

          {/* Industries */}
          <div className="relative">
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-white hover:text-cyan-400"
            >
              Industries
              <FiChevronDown />
            </button>

            {industriesOpen && (
              <div className="absolute left-0 top-8 w-48 rounded-lg bg-white p-2 shadow-lg">
                <a
                  href="#"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                >
                  Healthcare
                </a>

                <a
                  href="#"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                >
                  Fintech
                </a>

                <a
                  href="#"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                >
                  E-commerce
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-sm font-semibold text-white hover:text-cyan-400"
          >
            Blog
          </a>

          <a
            href="#"
            className="text-sm font-semibold text-white hover:text-cyan-400"
          >
            About Us
          </a>

          <a
            href="#"
            className="text-sm font-semibold text-white hover:text-cyan-400"
          >
            Contact Us
          </a>

          {/* Phone */}
          <a
            href="tel:+919643511611"
            className="flex items-center gap-2 rounded-full bg-linear-to-r from-[#9d6c30] to-[#d3ad4d] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <FiPhoneCall />
            +91 123456789
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
