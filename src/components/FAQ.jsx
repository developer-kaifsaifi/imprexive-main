
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Corporate events & conferences",
    answer:
      "Bring your people, partners and ideas into the same room. Conferences, leadership meets, town halls and annual celebrations, built around your objectives.",
  },
  {
    question: "Experiential & brand activations",
    answer:
      "Create meaningful brand interactions through immersive activations, engaging experiences and campaigns that bring your brand closer to its audience.",
  },
  {
    question: "Exhibitions & spatial design",
    answer:
      "From exhibition stands to immersive brand spaces, we design environments that capture attention and communicate your brand story.",
  },
  {
    question: "Creative & integrated marketing",
    answer:
      "We connect creative thinking with strategic marketing to deliver consistent brand experiences across channels and touchpoints.",
  },
  {
    question: "MICE & curated experiences",
    answer:
      "We plan meetings, incentives, conferences and bespoke experiences with thoughtful details and seamless execution.",
  },
];

const gradient =
  "linear-gradient(135deg, #7334E4 0%, #B52BB5 50%, #FF9222 100%)";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[946px] rounded-[22px] border border-[#A8A8A8] bg-[#F4F5F8] px-5 py-8 sm:px-10 sm:py-10 lg:px-[58px] lg:py-[30px]">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-4 border-b border-[#C3C6CC] pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <h2 className="font-manrope text-[26px] font-bold leading-[1.25] tracking-tight text-black sm:text-[30px]">
            Big picture thinking.
            <br />
            Every detail covered.
          </h2>

          <p className="font-dm text-sm leading-[1.5] text-[#737D8D] sm:shrink-0">
            One creative partner.
            <br />
            From the first idea to the live experience.
          </p>
        </div>

        {/* FAQ items */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`border-b border-[#CDD0D6] last:border-b-0 ${
                  isOpen ? "pb-3" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-[14px] text-left"
                >
                  <span
                    className="font-manrope text-[15px] font-semibold sm:text-base"
                    style={{ color: "#A338E8" }}
                  >
                    {faq.question}
                  </span>

                  <span
                    className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: gradient }}
                  >
                    {isOpen ? (
                      <Minus size={15} strokeWidth={3} />
                    ) : (
                      <Plus size={15} strokeWidth={3} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[680px] pr-5 font-dm text-sm leading-[1.5] text-[#737D8D]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
