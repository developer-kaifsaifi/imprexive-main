
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import GradientButton from "./GradientButton.jsx";
import FAQ from "./FAQ.jsx";

const services = [
  {
    number: "01",
    title: "Corporate Events & Conferences",
    description:
      "Bring people, ideas and business priorities into the same room. We support conferences, leadership meets, town halls and annual celebrations with considered planning, creative development and coordinated event execution.",
    link: "Explore Corporate Events",
    href: "/services/corporate-events/",
  },
  {
    number: "02",
    title: "Experiential & Brand Activations",
    description:
      "Give your audience a reason to engage with your brand. We develop and deliver live brand experiences that bring ideas into the physical world through creative concepts, interactive environments and audience participation.",
    link: "Explore Brand Activations",
    href: "/services/brand-activations/",
  },
  {
    number: "03",
    title: "Exhibitions & Spatial Design",
    description:
      "Turn physical space into a clear expression of your brand. We help shape exhibition stands and branded environments that bring your story, products and ideas into focus through considered design and coordinated delivery.",
    link: "Explore Exhibition Design",
    href: "/services/exhibitions-spatial-design/",
  },
  {
    number: "04",
    title: "Creative & Integrated Marketing",
    description:
      "Connect the idea with every touchpoint that brings it to life. We support creative development and marketing communications across relevant digital and physical channels, helping campaigns, event communications and brand experiences tell a more connected story.",
    link: "Explore Creative & Integrated Marketing",
    href: "/services/creative-integrated-marketing/",
  },
  {
    number: "05",
    title: "MICE & Curated Experiences",
    description:
      "Create purposeful experiences around the people, place and occasion. From business gatherings and meetings to curated corporate experiences, we help bring the setting, programme and details together around the objectives of the engagement.",
    link: "Explore Curated Experiences",
    href: "/services/mice-curated-experiences/",
  },
];

const gradientButton =
  "bg-gradient-to-r from-[#7334E4] via-[#B52BB5] to-[#ED2689] text-white shadow-[0_8px_24px_rgba(115,52,228,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(181,43,181,0.3)]";

function Eyebrow({ children }) {
  return (
    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A45D5] sm:text-xs">
      {children}
    </p>
  );
}

function GradientText({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-block overflow-visible bg-clip-text pb-[0.14em] pr-[0.04em] font-extrabold text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #7334E4 0%, #8B31D3 23%, #B52BB5 42%, #ED2689 61%, #FF9222 100%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "0% 50%",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      animate={
        reduceMotion
          ? { backgroundPosition: "50% 50%" }
          : {
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}


function Reveal({ children, delay = 0, className = "" }) {
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

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-clip bg-white font-dm text-[#17151D]">
      {/* HERO */}
      <section className="relative">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 24, 0], scale: [1, 1.06, 1] }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[-160px] top-[-100px] h-[420px] w-[420px] rounded-full bg-purple-100/60 blur-[110px]"
        />

        <div className="pointer-events-none absolute right-[12%] top-[180px] h-[230px] w-[230px] rounded-full bg-orange-100/40 blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-10 lg:px-14 lg:pb-36">


          <Reveal delay={0.1}>
            <Eyebrow>WHAT WE DO</Eyebrow>

            <h1 className="max-w-6xl font-manrope text-[clamp(2.7rem,6.5vw,6.5rem)] font-extrabold leading-[1.04] tracking-[-0.06em]">
              Big-picture thinking.
              <br />
              <GradientText>Every detail covered.</GradientText>
            </h1>

            <div className="mt-9 flex flex-col gap-7 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-8 text-[#77717F] sm:text-lg">
                Explore our services to find the right starting point for your
                next event, exhibition, activation or marketing initiative.
              </p>

              <a
                href="/experience"
                className="group flex w-fit shrink-0 items-center gap-3 text-sm font-bold transition-colors hover:text-[#7334E4]"
              >
                Explore our expertise
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7334E4] to-[#C42DA7] text-white transition-transform duration-300 group-hover:rotate-45">
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
            className="mt-16 h-px origin-left bg-gradient-to-r from-[#7334E4]/50 via-black/10 to-transparent sm:mt-24"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="expertise"
        className="scroll-mt-10 px-5 pb-24 sm:px-8 sm:pb-32 lg:px-14 lg:pb-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>OUR EXPERTISE</Eyebrow>
                <h2 className="font-manrope text-3xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Ideas into action.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#77717F] sm:text-base">
                Different disciplines, one connected approach to creating
                meaningful brand experiences.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.07}>
                <motion.a
                  href={service.href}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex h-full min-h-[330px] flex-col border-t border-black/10 py-8 sm:min-h-[350px] sm:py-10"
                >
                  <div className="mb-9 flex items-center justify-between">
                    <span className="font-manrope text-sm font-bold tracking-wide text-[#8A45D5]">
                      {service.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#77717F] transition-all duration-300 group-hover:border-[#7334E4] group-hover:bg-[#7334E4] group-hover:text-white">
                      <ArrowDownRight
                        size={18}
                        className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                      />
                    </span>
                  </div>

                  <h3 className="max-w-sm font-manrope text-2xl font-extrabold leading-[1.2] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#7334E4] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#716C79] sm:text-base sm:leading-8">
                    {service.description}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-[#7334E4]">
                    {service.link}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>

                  <motion.div
                    initial={false}
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#7334E4] via-[#C42DA7] to-[#FF9222] transition-all duration-500 group-hover:w-full"
                  />
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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

          <GradientButton href="/contact">
            Start a Conversation
          </GradientButton>
        </div>
      </section>
      <FAQ/>
    </main>
  );
}
