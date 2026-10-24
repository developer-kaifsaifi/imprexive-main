import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import GradientButton from "../components/GradientButton";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="w-full">
      <div className="relative flex min-h-[720px] w-full overflow-hidden bg-[#061A32] sm:min-h-[780px] lg:min-h-screen">
        {/* Hero Background Image */}
        <img
          src="/assets/images/hero.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover object-[center_20%] transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col px-5 pb-16 pt-24 sm:px-8 sm:pt-28 md:px-12 lg:justify-center lg:px-16 lg:py-28 xl:px-24">
          {/* Heading */}
          <motion.h1
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.12,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="max-w-5xl font-manrope text-[clamp(2.5rem,5.2vw,5rem)] font-extrabold leading-[1.08] tracking-tight text-white"
          >
            {[
              "Good events",
              "get noticed.",
              "Great experiences",
              "stay with you.",
            ].map((line) => (
              <motion.span
                key={line}
                variants={fadeUp}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description + CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="mt-10 flex flex-col items-start gap-6 lg:mt-12 lg:flex-row lg:items-center lg:gap-10"
          >
            <div className="font-dm text-base font-light leading-relaxed text-white sm:text-lg lg:max-w-[520px] lg:text-xl xl:text-2xl">
              <p>We bring brands and people together.</p>
              <p>With bold ideas. Thoughtful details.</p>
              <p>And moments that mean something.</p>
            </div>

            <div className="shrink-0">
              <GradientButton href="#contact" className="mt-0">
                Let's Create Together
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}