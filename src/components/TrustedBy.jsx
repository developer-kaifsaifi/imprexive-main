import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

const logos = [
  "/assets/logos/DS.svg",
  "/assets/logos/SN.svg",
  "/assets/logos/UP.svg",
  "/assets/logos/SF.svg",
  "/assets/logos/GC.svg",
  "/assets/logos/TM.svg",
];

const SPEED = 55;

function LogoCard({ logo, index, reduceMotion }) {
  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -2, 0],
              opacity: [0.96, 1, 0.96],
            }
      }
      transition={{
        duration: 5 + (index % 3),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,
              scale: 1.035,
            }
      }
      className="group flex h-14 w-[135px] shrink-0 items-center justify-center rounded-md border border-white/10 bg-white px-5 py-3 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-950/20 sm:h-16 sm:w-[150px]"
    >
      <img
        src={logo}
        alt={`Trusted company ${index + 1}`}
        loading="eager"
        decoding="async"
        draggable="false"
        className="h-full w-full object-contain"
      />
    </motion.div>
  );
}

function LogoGroup({ groupRef, reduceMotion, duplicate = false }) {
  return (
    <div
      ref={groupRef}
      aria-hidden={duplicate ? "true" : undefined}
      className="flex w-max shrink-0 items-center gap-5 pr-5 sm:gap-6 sm:pr-6"
    >
      {logos.map((logo, index) => (
        <LogoCard
          key={`${duplicate ? "duplicate" : "original"}-${logo}`}
          logo={logo}
          index={index}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  );
}

export default function TrustedBy() {
  const reduceMotion = useReducedMotion();
  const firstGroupRef = useRef(null);

  const [groupWidth, setGroupWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const element = firstGroupRef.current;
    if (!element) return;

    const measure = () => {
      const width = element.getBoundingClientRect().width;

      setGroupWidth((previous) =>
        Math.abs(previous - width) > 0.5 ? width : previous
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || groupWidth <= 0) return;

    const distance = (SPEED * delta) / 1000;
    const nextX = x.get() - distance;

    // Reset by exactly one group's width.
    x.set(nextX <= -groupWidth ? nextX + groupWidth : nextX);
  });

  useEffect(() => {
    // Keep the track aligned after responsive width changes.
    x.set(0);
  }, [groupWidth, x]);

  return (
    <section className="w-full overflow-hidden bg-[#061A32] py-12 sm:py-14">
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.85, 1, 0.85],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-10 text-center sm:mb-12"
      >
        <p className="mb-3 font-dm text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50 sm:text-xs">
          Our Partners
        </p>

        <h2 className="font-manrope text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Trusted by teams at
        </h2>

        <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7334E4] via-[#ED2689] to-[#FF9222]" />
      </motion.div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex w-max items-center"
          style={{
            x,
            willChange: reduceMotion ? "auto" : "transform",
          }}
        >
          <LogoGroup
            groupRef={firstGroupRef}
            reduceMotion={reduceMotion}
          />

          <LogoGroup
            reduceMotion={reduceMotion}
            duplicate
          />

          <LogoGroup
            reduceMotion={reduceMotion}
            duplicate
          />
        </motion.div>
      </div>

      <p className="mt-7 text-center font-dm text-xs tracking-wide text-white/40">
        Building meaningful experiences through collaboration.
      </p>
    </section>
  );
}