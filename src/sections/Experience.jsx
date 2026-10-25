

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

const experiences = [
  {
    category: "BUSINESS & CONNECTION",
    title: "A stage for what’s next.",
    subtitle: "Conferences & leadership experiences",
    image: "/assets/images/Bussiness.webp",
    type: "Business",
    featured: true,
  },
  {
    category: "BRANDS IN THREE DIMENSIONS",
    title: "Step into the brand.",
    subtitle: "Exhibitions & experiential spaces",
    image: "/assets/images/Brands.webp",
    type: "Brand experiences",
  },
  {
    category: "PEOPLE & SHARED MOMENTS",
    title: "Make the moment matter.",
    subtitle: "Celebrations & curated evenings",
    image: "/assets/images/people.webp",
    type: "Celebrations",
  },
];

const categories = [
  "All experiences",
  "Business",
  "Brand experiences",
  "Celebrations",
];

const gradient =
  "linear-gradient(90deg, #7334E4 0%, #8B31D3 23%, #B52BB5 42%, #ED2689 61%, #FF9222 100%)";

function ExperienceCard({ item, reduceMotion }) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 24,
      }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: reduceMotion ? 0 : -12,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
        layout: { duration: reduceMotion ? 0 : 0.35 },
      }}
      className="min-w-0"
    >
      <div className="group relative overflow-hidden bg-[#F4F5F8]">
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          whileHover={reduceMotion ? {} : { scale: 1.045 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[280px]"
        />

        <span
          className="absolute left-3 top-3 max-w-[calc(100%-24px)] px-3 py-2 font-dm text-[9px] font-semibold tracking-[0.08em] text-white sm:left-4 sm:top-4"
          style={{ backgroundImage: gradient }}
        >
          {item.category}
        </span>
      </div>

      <h3 className="mt-4 font-manrope text-xl font-bold leading-tight tracking-tight text-[#101010] sm:text-2xl">
        {item.title}
      </h3>

      <p className="mt-2 font-dm text-sm leading-relaxed text-[#737D8D]">
        {item.subtitle}
      </p>
    </motion.article>
  );
}

export default function Experience() {
  const [active, setActive] = useState("All experiences");
  const reduceMotion = useReducedMotion();

  const filtered = experiences.filter(
    (item) => active === "All experiences" || item.type === active
  );

  const featured = filtered.find((item) => item.featured);
  const cards = filtered.filter((item) => !item.featured);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="experiences"
      className="w-full overflow-hidden bg-white px-5 py-14 text-[#101010] sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.15,
              },
            },
          }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <motion.h2
            variants={fadeUp}
            className="font-manrope text-[clamp(2rem,4.2vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight"
          >
            Different formats.
            <br />
            The same ambition.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-sm font-dm text-sm leading-relaxed text-[#737D8D] sm:pb-1 sm:text-base"
          >
            Every experience starts with a purpose and becomes something
            people remember.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: 0.1 }}
          className="mt-7 flex gap-2 overflow-x-auto pb-2"
        >
          {categories.map((category) => {
            const isActive = active === category;

            return (
             <motion.button
  key={category}
  type="button"
  onClick={() => setActive(category)}
  aria-pressed={isActive}
  whileTap={reduceMotion ? {} : { scale: 0.96 }}
  transition={{ duration: 0.2 }}
  className={`shrink-0 rounded-full border px-4 py-2 font-dm text-xs transition-colors duration-300 sm:text-sm ${
    isActive
      ? "border-transparent text-white"
      : "border-[#D9D9DF] bg-white text-[#555B66] hover:border-[#A338E8] hover:text-[#A338E8]"
  }`}
  style={
    isActive
      ? {
          background: gradient,
          borderColor: "transparent",
          backgroundClip: "padding-box",
        }
      : undefined
  }
>
  {category}
</motion.button>
            );
          })}
        </motion.div>

        {/* Experiences */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : -8,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
            className="mt-7"
          >
            {/* Featured experience */}
            {featured && (
              <motion.article
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : 0.05,
                }}
              >
                <div className="group relative overflow-hidden bg-[#F4F5F8]">
                  <motion.img
                    src={featured.image}
                    alt={featured.title}
                    loading="lazy"
                    decoding="async"
                    whileHover={reduceMotion ? {} : { scale: 1.025 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h-[240px] w-full object-cover sm:h-[340px] lg:h-[470px]"
                  />

                  <span
                    className="absolute left-4 top-4 px-3 py-2 font-dm text-[9px] font-semibold tracking-[0.08em] text-white sm:left-6 sm:top-6 sm:text-[10px]"
                    style={{ backgroundImage: gradient }}
                  >
                    {featured.category}
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="font-manrope text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {featured.title}
                  </h3>

                  <p className="font-dm text-sm text-[#737D8D] sm:pb-1 sm:text-base">
                    {featured.subtitle}
                  </p>
                </div>
              </motion.article>
            )}

            {/* Remaining experiences */}
            {cards.length > 0 && (
              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduceMotion ? 0 : 0.14,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                className={`mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-6 ${
                  featured ? "" : "mt-0"
                }`}
              >
                {cards.map((item) => (
                  <ExperienceCard
                    key={item.title}
                    item={item}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </motion.div>
            )}

            {filtered.length === 0 && (
              <p className="py-10 font-dm text-[#737D8D]">
                No experiences found.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
