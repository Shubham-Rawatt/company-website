import React from "react";
import { FiMessageSquare, FiSend } from "react-icons/fi";

const ContactForm = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="flex items-center gap-2 text-lg font-[450] text-[#222]">
        <FiMessageSquare className="text-[#9a6330]" />
        Tell Us About Your Project
      </h2>

      <p className="mt-2 text-xs leading-5 text-gray-400">
        Fill in your details and we'll send you a free quote within 24 hours.
        All information is kept confidential.
      </p>

      <div className="mt-6">
        <label className="mb-2 block text-[10px] text-gray-500">
          YOUR FULL NAME *
        </label>
        <input
          type="text"
          placeholder="e.g. John Smith"
          className="w-full rounded-lg border border-[#ddd5cc] px-4 py-3 text-sm outline-none focus:border-[#9a6330]"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-[10px] text-gray-500">
          BUSINESS EMAIL ADDRESS *
        </label>
        <input
          type="email"
          placeholder="e.g. john@yourcompany.com"
          className="w-full rounded-lg border border-[#ddd5cc] px-4 py-3 text-sm outline-none focus:border-[#9a6330]"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-[10px] text-gray-500">
          PHONE NUMBER *
        </label>
        <input
          type="text"
          placeholder="e.g. +1 (123) 456-7890"
          className="w-full rounded-lg border border-[#ddd5cc] px-4 py-3 text-sm outline-none focus:border-[#9a6330]"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-[10px] text-gray-500">
          TELL US ABOUT YOUR PROJECT *
        </label>
        <textarea
          rows="6"
          placeholder="Describe what you need..."
          className="w-full resize-none rounded-lg border border-[#ddd5cc] px-4 py-3 text-sm outline-none focus:border-[#9a6330]"
        />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs text-gray-400">Free quote within 24 hours</p>

        <button className="flex items-center gap-2 rounded-lg bg-[#9a6330] px-5 py-3 text-xs text-white">
          Get Free Quote
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
