import Accordion from "../../components/Accordion/accordion";


const FAQ = () => {
  return (
    <section className="bg-[#f8fafc] px-6 py-16">
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#b46d3c]">
          COMMON QUESTIONS
        </p>

        <h2 className="text-5xl font-bold tracking-[-0.04em] text-[#071b3a]">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#40516a] sm:text-lg">
          Everything you need to know about our custom software development
          services and how we can accelerate your digital transformation.
        </p>
      </div>

      {/* <Accordion /> */}
      <Accordion />
    </section>
  );
};

export default FAQ;