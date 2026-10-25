
import { motion, useReducedMotion } from "motion/react";
import Experience from "../sections/Experience.jsx";
import GradientButton from "../components/GradientButton.jsx";
import FAQ from "../components/FAQ.jsx";

const gradient =
  "linear-gradient(90deg,#7334E4 0%,#8B31D3 23%,#B52BB5 42%,#ED2689 61%,#FF9222 100%)";

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function GradientText({ children }) {
  return (
    <span
      style={{
        backgroundImage: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
}

export default function ExperiencePage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Experience />

      <section className="relative isolate overflow-hidden bg-[#17151D] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 30, 0], y: [0, -20, 0] }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-24 -top-40 -z-10 h-[430px] w-[430px] rounded-full bg-purple-700/30 blur-[110px]"
        />

        <div className="pointer-events-none absolute -bottom-40 left-[25%] -z-10 h-[320px] w-[320px] rounded-full bg-orange-500/20 blur-[100px]" />

        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D3A7FF] sm:text-xs">
              LET'S CREATE TOGETHER
            </p>

            <h2 className="font-manrope text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Give your next idea
              <br />
              <GradientText>a place to begin.</GradientText>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              Have a brief, a big idea or just the beginning of a plan? Let's
              explore what we can create together.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <GradientButton href="/contact">Start a Conversation</GradientButton>
          </Reveal>
        </div>
      </section>
      <FAQ/>
    </>
  );
}
