
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const services = [
  "Corporate event",
  "Conference",
  "Exhibition",
  "Brand activation",
  "Other",
];

const gradient =
  "linear-gradient(90deg, #7334E4 0%, #8B31D3 23%, #B52BB5 42%, #ED2689 61%, #FF9222 100%)";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: "",
    timeline: "",
    idea: "",
  });

  const [status, setStatus] = useState("");
  const reduceMotion = useReducedMotion();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const brief = `
IMPREXIVE — ENQUIRY BRIEF

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Project Type: ${formData.type}
Timeline: ${formData.timeline}

Project Details:
${formData.idea}
`;

    const blob = new Blob([brief], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "imprexive-enquiry-brief.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

    setStatus("Your enquiry brief has been downloaded.");
  };

  const inputClass =
    "mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-[#061A32] outline-none transition placeholder:text-slate-400 focus:border-[#8B31D3] focus:ring-2 focus:ring-[#8B31D3]/10";

  const labelClass =
    "block font-dm text-sm font-medium text-[#061A32]";

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

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <div className="w-full bg-white text-[#061A32]">
      <section
        id="enquiry"
        className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-[8%] lg:py-24"
      >
        {/* Left Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:sticky lg:top-24"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 font-dm text-[10px] font-semibold tracking-[0.2em] text-slate-500"
          >
            YOUR NEXT BIG MOMENT STARTS HERE
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="overflow-visible font-manrope text-[42px] font-semibold leading-[1.15] tracking-[-1.5px] sm:text-[56px] lg:text-[64px]"
          >
            Got a brief?
            <br />
            Or just a
            <br />

            <motion.span
              className="inline-block bg-clip-text pb-[0.12em] text-transparent"
              style={{
                backgroundImage: gradient,
                backgroundSize: "200% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0% 50%",
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
              big idea?
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-lg font-dm text-sm leading-7 text-slate-600 sm:text-base"
          >
            Whether you’re planning a corporate event, exhibition, brand
            activation or a broader marketing initiative, tell us what
            you’re working towards.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-dm text-sm leading-7 text-slate-600 sm:text-base"
          >
            Share what you know. We’ll take it from there.
          </motion.p>
        </motion.div>

        {/* Enquiry Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10"
        >
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 font-manrope text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Let’s start with your idea.
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <motion.label variants={fadeUp} className={labelClass}>
                Your name
                <input
                  className={inputClass}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </motion.label>

              <motion.label variants={fadeUp} className={labelClass}>
                Company
                <input
                  className={inputClass}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  placeholder="Your organisation"
                  required
                />
              </motion.label>
            </div>

            <motion.label
              variants={fadeUp}
              className={`${labelClass} mt-5`}
            >
              Work email
              <input
                className={inputClass}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="name@company.com"
                required
              />
            </motion.label>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <motion.label variants={fadeUp} className={labelClass}>
                What are you planning?
                <select
                  className={inputClass}
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </motion.label>

              <motion.label variants={fadeUp} className={labelClass}>
                Project timeline
                <input
                  className={inputClass}
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="Preferred date or timeframe"
                />
              </motion.label>
            </div>

            <motion.label
              variants={fadeUp}
              className={`${labelClass} mt-5`}
            >
              Tell us more
              <textarea
                className={`${inputClass} min-h-32 resize-y`}
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                rows={4}
                placeholder="Your objectives, audience, requirements or initial thoughts..."
                required
              />
            </motion.label>

            <motion.button
              variants={fadeUp}
              type="submit"
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -2,
                      boxShadow: "0px 8px 24px rgba(6,26,50,0.16)",
                    }
              }
              whileTap={reduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[#061A32] px-6 py-4 font-dm text-sm font-medium text-white transition-colors duration-300 hover:bg-[#142F4F] sm:w-auto"
            >
              Let’s Create Together

              <motion.span
                className="ml-3 inline-block"
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? {}
                    : { x: [0, 4, 0] }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                →
              </motion.span>
            </motion.button>

            <motion.p
              variants={fadeUp}
              className="mt-5 font-dm text-xs leading-5 text-slate-500"
            >
              Preview mode: creates a downloadable enquiry brief. Your
              details are not sent to Imprexive.{" "}
              <a
                href="/privacy/"
                className="underline underline-offset-4 transition hover:text-[#8B31D3]"
              >
                Privacy Policy
              </a>
            </motion.p>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                }}
                className="mt-4 font-dm text-sm text-green-700"
                role="status"
              >
                {status}
              </motion.p>
            )}
          </motion.div>
        </motion.form>
      </section>
    </div>
  );
}
