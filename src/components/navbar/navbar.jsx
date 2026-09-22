import { useState } from "react";
import { FiChevronDown, FiPhoneCall, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="bg-[#111111] px-5 py-4 md:px-10 md:py-5">
      <div className="mx-auto max-w-7xl">
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold text-cyan-400">∞</span>

            <span className="text-lg font-bold text-white">
              Tech<span className="text-cyan-400">Couples</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
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
                <div className="absolute left-0 top-8 z-20 w-48 rounded-lg bg-white p-2 shadow-lg">
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    Web Development
                  </a>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    App Development
                  </a>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
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
                <div className="absolute left-0 top-8 z-20 w-48 rounded-lg bg-white p-2 shadow-lg">
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    SaaS Products
                  </a>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    AI Products
                  </a>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
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
                <div className="absolute left-0 top-8 z-20 w-48 rounded-lg bg-white p-2 shadow-lg">
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    Healthcare
                  </a>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    Fintech
                  </a>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-5 border-t border-white/10 pt-5 lg:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="/"
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Home
              </a>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Services
                  <FiChevronDown className={servicesOpen ? "rotate-180" : ""} />
                </button>

                {servicesOpen && (
                  <div className="ml-3 border-l border-white/10 pl-3">
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      Web Development
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      App Development
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      UI/UX Design
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Products
                  <FiChevronDown className={productsOpen ? "rotate-180" : ""} />
                </button>

                {productsOpen && (
                  <div className="ml-3 border-l border-white/10 pl-3">
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      SaaS Products
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      AI Products
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      Enterprise Solutions
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Industries */}
              <div>
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Industries
                  <FiChevronDown
                    className={industriesOpen ? "rotate-180" : ""}
                  />
                </button>

                {industriesOpen && (
                  <div className="ml-3 border-l border-white/10 pl-3">
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      Healthcare
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      Fintech
                    </a>
                    <a href="#" className="block py-2 text-sm text-gray-400">
                      E-commerce
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Blog
              </a>

              <a
                href="#"
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                About Us
              </a>

              <a
                href="#"
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Contact Us
              </a>

              {/* Mobile Phone */}
              <a
                href="tel:+919643511611"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#9d6c30] to-[#d3ad4d] px-5 py-3 text-sm font-semibold text-white"
              >
                <FiPhoneCall />
                +91 123456789
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
