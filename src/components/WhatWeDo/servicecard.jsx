
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { services } from "../../data/service";

const ServicesCard = () => {
  return (
    <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.id}
            className="group flex min-h-125 flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a06a] hover:shadow-xl hover:shadow-black/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#99652f] transition-colors duration-300 group-hover:border-[#c9a06a]">
              <Icon size={21} strokeWidth={1.8} />
            </div>

            <h3 className="mt-7 text-[21px] font-bold tracking-[-0.4px] text-black">
              {service.title}
            </h3>

            <p className="mt-3 text-[15px] leading-6 text-gray-400">
              {service.description}
            </p>

        
            <ul className="mt-5 space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-[14px] text-gray-500"
                >
                  <FiCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-[#99652f]"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Bottom */}
            <div className="mt-auto pt-7">
              <div className="mb-6 h-px w-full bg-gray-200" />

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[1.2px] text-black transition-colors duration-300 group-hover:text-[#99652f]"
              >
                LEARN MORE
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCard;