
import { useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Menu,
  X,
  Plus,
  Sparkles,
} from "lucide-react";
import GradientButton from "../components/GradientButton.jsx";

const navigation = [
  { label: "Who We Are", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Our Work", href: "/work/" },
  { label: "Contact", href: "/contact/" },
];

const processSteps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Start with why.",
    description:
      "We get to the heart of your brief: the objective, audience, occasion, requirements and constraints. This creates a shared understanding of what the experience needs to achieve.",
    outcome: "An aligned brief and a clear understanding of the objectives.",
  },
  {
    number: "02",
    label: "CREATE",
    title: "Find the spark.",
    description:
      "We translate the brief into a creative direction and a practical plan, considering the audience, brand, environment and requirements.",
    outcome:
      "A proposed concept and execution approach aligned to the agreed scope.",
  },
  {
    number: "03",
    label: "DELIVER",
    title: "Make it happen.",
    description:
      "We coordinate production requirements, people and on-ground details to bring the experience together with care and attention to execution.",
    outcome: "Delivery of the agreed event or experience.",
  },
  {
    number: "04",
    label: "REFLECT",
    title: "Keep it moving.",
    description:
      "Where included in the engagement, we review available feedback, observations and agreed measures to identify learnings for what comes next.",
    outcome: "A review of learnings, where included in the agreed scope.",
  },
];

const gradientButton =
  "bg-gradient-to-r from-[#7334E4] via-[#B52BB5] to-[#ED2689] text-white shadow-[0_6px_20px_rgba(115,52,228,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(181,43,181,0.3)]";

function Eyebrow({ children }) {
  return (
    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A45D5] sm:text-xs">
      {children}
    </p>
  );
}

function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-[#7334E4] via-[#B52BB5] to-[#FF9222] bg-clip-text font-extrabold text-transparent">
      {children}
    </span>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProcessRow({ step, index, expanded, onToggle }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative border-b border-black/10 py-10 sm:py-14"
    >
      <div className="grid gap-5 sm:grid-cols-[72px_1fr] sm:gap-8">
        <div className="flex items-start gap-3 sm:block">
          <span className="font-manrope text-sm font-bold text-[#8A45D5]">
            {step.number}
          </span>
          <span className="text-xs text-[#AAA4B0]">/ 04</span>
        </div>

        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8A45D5]">
            {step.label}
          </p>

          <h3 className="font-manrope text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            {step.title}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#716C79] sm:text-base sm:leading-8">
            {step.description}
          </p>

          <button
            type="button"
            aria-expanded={expanded}
            onClick={onToggle}
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#514B5B] transition-colors hover:text-[#7334E4]"
          >
            {expanded ? "Close outcome" : "Explore outcome"}
            <motion.span
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <Plus size={15} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -8 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="mt-5 max-w-xl border-l-2 border-[#C42DA7] py-1 pl-4 text-sm leading-7 text-[#514B5B]">
                  <span className="font-bold text-[#27232E]">
                    Outcome:{" "}
                  </span>
                  {step.outcome}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedStep, setExpandedStep] = useState(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const heroGlowY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, reduceMotion ? 0 : 100]
  );

  return (
    <div className="min-h-screen overflow-clip bg-white font-dm text-[#17151D]">
    
      <main id="main">
        {/* HERO */}
        <section className="relative">
          <motion.div
            style={{ y: heroGlowY }}
            className="pointer-events-none absolute right-[-180px] top-[-100px] h-[460px] w-[460px] rounded-full bg-purple-100/60 blur-[110px]"
          />

          <div className="pointer-events-none absolute right-[10%] top-[120px] h-[250px] w-[250px] rounded-full bg-orange-100/40 blur-[100px]" />

          <div className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-8 sm:px-8 sm:pb-32 sm:pt-10 lg:px-14 lg:pb-36">
            

            <Reveal delay={0.1}>
              <Eyebrow>WHO WE ARE</Eyebrow>

              <h1 className="max-w-6xl font-manrope text-[clamp(2.5rem,6.3vw,6.5rem)] font-extrabold leading-[1.04] tracking-[-0.06em]">
                Ideas become experiences.
                <br />
                <GradientText>
                  Experiences leave an impact.
                </GradientText>
              </h1>

              <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-lg text-lg leading-relaxed text-[#77717F] sm:text-xl">
                  A room full of people. A world of possibilities.
                </p>

                <a
                  href="/contact/"
                  className="group flex w-fit items-center gap-4 text-sm font-bold transition-colors hover:text-[#7334E4]"
                >
                  Let's create something meaningful
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#7334E4] to-[#C42DA7] text-white shadow-lg shadow-purple-200 transition-all duration-300 group-hover:scale-110">
                    <ArrowDownRight size={18} />
                  </span>
                </a>
              </div>
            </Reveal>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-20 h-px origin-left bg-gradient-to-r from-[#7334E4]/50 via-black/10 to-transparent sm:mt-28"
            />
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-28 sm:px-8 sm:pb-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:px-14">
          <Reveal>
            <Eyebrow>THE THINKING BEHIND THE EXPERIENCE</Eyebrow>

            <h2 className="max-w-xl font-manrope text-3xl font-extrabold leading-[1.12] tracking-[-0.05em] sm:text-5xl lg:text-[58px]">
              It starts with an idea.
              <br />
              It ends with an impression.
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 h-[3px] rounded-full bg-gradient-to-r from-[#7334E4] to-[#FF9222]"
            />
          </Reveal>

          <Reveal className="max-w-2xl lg:pt-10" delay={0.12}>
            <div className="space-y-6 text-base leading-[1.95] text-[#716C79] sm:text-lg">
              <p>
                The right experience can bring people together, make an idea
                tangible and give a brand a more meaningful way to connect
                with its audience.
              </p>
              <p>
                Imprexive brings strategy, creative thinking and execution
                together across corporate events, conferences, exhibitions,
                brand activations and curated experiences.
              </p>
              <p>
                From shaping the initial concept to coordinating the details
                on the ground, we work to ensure every element serves a
                purpose and contributes to the bigger picture.
              </p>
              <p className="border-l-2 border-[#C42DA7] pl-5 font-manrope text-xl font-semibold leading-relaxed text-[#27232E] sm:text-2xl">
                Because the best experiences are not just seen. They are
                felt, shared and remembered.
              </p>
            </div>
          </Reveal>
        </section>

        {/* STICKY PROCESS SECTION */}
        <section className="relative border-y border-black/[0.06] bg-[#FAF9FC] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              {/* Sticky left column */}
              <div className="self-start lg:sticky lg:top-24 lg:h-fit">
                <Reveal>
                  <Eyebrow>HOW WE WORK</Eyebrow>

                  <h2 className="font-manrope text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[clamp(3rem,4.5vw,5rem)]">
                    From “what if”
                    <br />
                    to
                    <br />
                    <GradientText>
                      “you had to be there.”
                    </GradientText>
                  </h2>

                  <p className="mt-7 max-w-md text-base leading-8 text-[#77717F] sm:text-lg">
                    Great experiences need more than a great idea. They need
                    a clear objective, a considered concept and coordinated
                    execution.
                  </p>

                  <div className="mt-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8A45D5] lg:flex">
                    <Sparkles size={16} />
                    From idea to impact
                  </div>

                  <div className="mt-10 hidden h-[3px] w-24 rounded-full bg-gradient-to-r from-[#7334E4] via-[#C42DA7] to-[#FF9222] lg:block" />
                </Reveal>
              </div>

              {/* Animated right column */}
              <div className="border-t border-black/10 lg:border-t-0">
                {processSteps.map((step, index) => (
                  <ProcessRow
                    key={step.number}
                    step={step}
                    index={index}
                    expanded={expandedStep === index}
                    onToggle={() =>
                      setExpandedStep(
                        expandedStep === index ? null : index
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-36">
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[-100px] top-[-120px] h-[400px] w-[400px] rounded-full bg-purple-100/70 blur-[110px]"
          />

          <div className="pointer-events-none absolute bottom-[-160px] left-[30%] h-[300px] w-[300px] rounded-full bg-orange-100/50 blur-[100px]" />

          <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <Eyebrow>LET'S CREATE TOGETHER</Eyebrow>

              <h2 className="font-manrope text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Give your next idea
                <br />
                a place to begin.
              </h2>
            </Reveal>

            <GradientButton>Start a Conversation</GradientButton>
          </div>
        </section>
      </main>


    </div>
  );
}
