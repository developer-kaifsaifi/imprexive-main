
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Start with why.",
    description:
      "Your audience, your objectives, your story. We ask the questions that shape the experience.",
  },
  {
    number: "02",
    label: "CREATE",
    title: "Find the spark.",
    description:
      "We turn the brief into a concept, a visual world and a practical plan.",
  },
  {
    number: "03",
    label: "DELIVER",
    title: "Make it happen.",
    description:
      "Production, people and details come together for a considered live experience.",
  },
  {
    number: "04",
    label: "REFLECT",
    title: "Keep it moving.",
    description:
      "We capture the moments and learnings that inform what comes next.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="m-0 w-full bg-[#061A32] p-0 text-white"
    >
      <div className="mx-auto w-full max-w-none px-6 py-10 sm:px-10 sm:py-12 lg:px-[8%] lg:py-[46px]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-manrope text-[28px] font-semibold leading-[1.2] tracking-[-0.7px] sm:text-[34px] lg:text-[38px]"
        >
          From “what if”
          <br />
          to “you had to be there.”
        </motion.h2>

        {/* Process steps */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="min-w-0"
            >
              {/* Divider */}
              <div className="mb-3 h-px w-full bg-white/15" />

              {/* Step label */}
              <p className="font-dm text-[10px] font-normal text-[#C6A2FF]">
                {step.number} / {step.label}
              </p>

              {/* Step title */}
              <h3 className="mt-2 font-manrope text-[18px] font-semibold leading-tight sm:text-[19px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-1 max-w-[240px] font-dm text-[11px] leading-[1.6] text-[#AAB6C7]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
