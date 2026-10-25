import { motion, useReducedMotion } from "motion/react";
import GradientButton from "../components/GradientButton";

const gradient =
  "linear-gradient(90deg,#7334E4 0%,#8B31D3 23%,#B52BB5 42%,#ED2689 61%,#FF9222 100%)";

export default function Whatwedo() {
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

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section className="w-full overflow-hidden bg-white">
      {/* Gradient tagline */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex min-h-20 w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 font-manrope text-sm font-semibold text-white sm:gap-x-10 sm:text-lg md:min-h-23 md:gap-x-12 md:text-xl lg:justify-evenly lg:text-2xl"
        style={{ background: gradient }}
      >
        {["THINK BOLD.", "MAKE IT REAL.", "MAKE IT IMPREXIVE."].map(
          (text) => (
            <motion.h3 key={text} variants={fadeUp}>
              {text}
            </motion.h3>
          )
        )}
      </motion.div>

      {/* Main content */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-20 xl:px-24">
        {/* Left column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-w-0 font-manrope font-extrabold"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2rem,4.2vw,3.06rem)] leading-[1.15] tracking-tight text-neutral-900"
          >
            <span className="block">It starts with an idea.</span>
            <span className="block">It ends with</span>

            <motion.span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: gradient,
                backgroundSize: "200% 100%",
              }}
              animate={
                reduceMotion
                  ? {}
                  : {
                      backgroundPosition: [
                        "0% 50%",
                        "100% 50%",
                        "0% 50%",
                      ],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              an impression.
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Right column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex min-w-0 flex-col items-start gap-7 lg:gap-8"
        >
          <motion.div variants={fadeUp} className="font-manrope text-2xl font-semibold leading-snug text-neutral-900 sm:text-3xl">
            <h3>A room full of people.</h3>
            <h3>A world of possibilities.</h3>
          </motion.div>

          <motion.div
            variants={stagger}
            className="max-w-2xl space-y-5 text-base leading-relaxed text-[#5D6674] sm:text-lg"
          >
            <motion.p variants={fadeUp}>
              We’re an event marketing partner for brands that want to
              connect. From the first conversation to the final curtain,
              we bring strategy, creativity and on-ground execution into
              one shared vision.
            </motion.p>

            <motion.p variants={fadeUp}>
              A conference that sparks a conversation. An activation that
              invites participation. A celebration people carry home.
              Every detail has a purpose.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-fit"
            whileHover={reduceMotion ? {} : { y: -3 }}
            whileTap={reduceMotion ? {} : { scale: 0.98 }}
          >
            <GradientButton href="/experience" className="w-fit">
              Discover our expertise
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}