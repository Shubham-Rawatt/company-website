import React from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle, FiLinkedin, FiFacebook,} from "react-icons/fi";

const ContactCard = () => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex gap-4 rounded-xl border border-[#eee9e2] p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f0e9] text-[#9a6330]">
          <FiMail />
        </div>

        <div>
          <p className="text-[10px] text-gray-400">EMAIL US</p>
          <p className="mt-1 text-sm font-medium">gulkshey@techcouples.com</p>
          <p className="text-xs text-gray-400">We reply within 24 hours</p>
        </div>
      </div>

      <div className="mb-4 flex gap-4 rounded-xl border border-[#eee9e2] p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f0e9] text-[#9a6330]">
          <FiPhone />
        </div>

        <div>
          <p className="text-[10px] text-gray-400">CALL US</p>
          <p className="mt-1 text-sm font-medium">+91 96435 11611</p>
          <p className="text-xs text-gray-400">Mon-Fri, 9am to 6pm IST</p>
        </div>
      </div>

      <div className="mb-4 flex gap-4 rounded-xl border border-[#eee9e2] p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f0e9] text-[#9a6330]">
          <FiMapPin />
        </div>

        <div>
          <p className="text-[10px] text-gray-400">OUR OFFICE</p>
          <p className="mt-1 text-sm">
            WZ-73, 2nd Floor, Nangli Jaleeb, Janakpuri, New Delhi, Delhi 110058
          </p>
          <p className="text-xs text-gray-400">& Remote Teams Worldwide</p>
        </div>
      </div>

      <div className="mb-4 flex gap-4 rounded-xl border border-[#eee9e2] p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f0e9] text-[#9a6330]">
          <FiClock />
        </div>

        <div>
          <p className="text-[10px] text-gray-400">RESPONSE TIME</p>
          <p className="mt-1 text-sm font-medium">Within 24 Hours</p>
          <p className="text-xs text-gray-400">For all project inquiries</p>
        </div>
      </div>

      <div className="border-t border-[#eee9e2] pt-5">
        <p className="text-[10px] text-gray-400">WHY WORK WITH US</p>

        <div className="mt-3 space-y-2 text-xs text-gray-600">
          <p className="flex gap-2">
            <FiCheckCircle className="text-[#9a6330]" />
            Custom-built websites and web apps
          </p>

          <p className="flex gap-2">
            <FiCheckCircle className="text-[#9a6330]" />
            Experienced team of developers
          </p>

          <p className="flex gap-2">
            <FiCheckCircle className="text-[#9a6330]" />
            Transparent pricing, no hidden fees
          </p>

          <p className="flex gap-2">
            <FiCheckCircle className="text-[#9a6330]" />
            Ongoing support after launch
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#eee9e2] pt-5">
        <div>
          <p className="text-[10px] text-gray-400">FOLLOW US</p>
          <p className="text-xs text-gray-400">
            Tips, updates & insights daily
          </p>
        </div>

        <div className="flex gap-2">
          <button className="rounded-lg border p-2 text-gray-500">
            <FiLinkedin />
          </button>

          <button className="rounded-lg border p-2 text-gray-500">
            <FiFacebook />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
