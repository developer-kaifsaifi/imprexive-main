
// import { motion } from "motion/react";
// import { ArrowUpRight } from "lucide-react";

// export default function GradientButton({
//   children = "Let's Create Together",
//   href = "#contact",
//   showArrow = true,
//   className = "",
// }) {
//   return (
//     <motion.a
//       href={href}
//       whileHover={{ scale: 1.04 }}
//       whileTap={{ scale: 0.97 }}
//       transition={{ duration: 0.2, ease: "easeOut" }}
//       className={`inline-flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#A64DE3] via-[#D84F9C] to-[#F47745] px-7 py-4 font-dm text-5 font-semibold text-white shadow-sm transition-shadow duration-300 hover:shadow-lg ${className}`}
//     >
//       <span>{children}</span>

//       {showArrow && (
//         <ArrowUpRight
//           size={18}
//           strokeWidth={1.8}
//           aria-hidden="true"
//         />
//       )}
//     </motion.a>
//   );
// }



import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function GradientButton({
  children = "Let's Create Together",
  href = "#contact",
  showArrow = true,
  className = "",
}) {
  const gradient =
    "linear-gradient(90deg, #A64DE3 0%, #D84F9C 50%, #F47745 100%)";

  return (
    <motion.a
      href={href}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={`relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-[10px] border border-[#B52BB5] px-7 py-4 font-dm text-5 font-semibold shadow-sm ${className}`}
    >
      {/* Original gradient background */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: gradient }}
      />

      {/* White background reveal */}
      <motion.span
        aria-hidden="true"
        variants={{
          rest: {
            clipPath: "inset(0 100% 0 0)",
          },
          hover: {
            clipPath: "inset(0 0% 0 0)",
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute inset-0 z-[1] bg-white"
      />

      {/* Button content */}
      <motion.span
        variants={{
          rest: { color: "#FFFFFF" },
          hover: { color: "#B52BB5" },
        }}
        transition={{ duration: 0.25 }}
        className="relative z-10"
      >
        {children}
      </motion.span>

      {showArrow && (
        <motion.span
          variants={{
            rest: { color: "#FFFFFF", x: 0 },
            hover: { color: "#B52BB5", x: 3 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10"
        >
          <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </motion.span>
      )}
    </motion.a>
  );
}