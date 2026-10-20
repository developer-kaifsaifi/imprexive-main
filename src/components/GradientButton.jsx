
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function GradientButton({
  children = "Let's Create Together",
  href = "#contact",
  showArrow = true,
  className = "",
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#A64DE3] via-[#D84F9C] to-[#F47745] px-8 py-5 font-dm text-5 font-semibold text-white shadow-sm transition-shadow duration-300 hover:shadow-lg ${className}`}
    >
      <span>{children}</span>

      {showArrow && (
        <ArrowUpRight
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      )}
    </motion.a>
  );
}
