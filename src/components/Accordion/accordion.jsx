import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { FiChevronDown } from "react-icons/fi";
import { faqData } from "../../data/faq";

const Accordion = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="text-[#071b3a]"
      data-inactive-classes="text-[#071b3a]"
      className="mx-auto mt-14 w-full max-w-3xl space-y-4"
    >
      {faqData.map((faq, index) => (
        <div
          key={faq.id}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md"
        >
          {/* Question */}
          <h2 id={`accordion-heading-${faq.id}`}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left text-[15px] font-semibold text-[#071b3a] transition-colors duration-300 hover:text-[#315b9a]"
              data-accordion-target={`#accordion-body-${faq.id}`}
              aria-expanded={index === 0}
              aria-controls={`accordion-body-${faq.id}`}
            >
              <span className="font-bold">{faq.question}</span>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50">
                <FiChevronDown
                  data-accordion-icon
                  className="h-5 w-5 text-[#7890ad]"
                />
              </span>
            </button>
          </h2>

          {/* Answer */}
          <div
            id={`accordion-body-${faq.id}`}
            className={index === 0 ? "" : "hidden"}
            aria-labelledby={`accordion-heading-${faq.id}`}
          >
            <div className="border-t border-gray-100 px-6 pb-6 pt-5">
              <p className="text-sm font-normal leading-6 text-[#40516a] sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
