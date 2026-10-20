
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Experiences", href: "#experiences" },
];

const gradient =
  "linear-gradient(90deg, #7334E4 0%, #8B31D3 23%, #B52BB5 42%, #ED2689 61%, #FF9222 100%)";

function AnimatedNavLink({ link }) {
  return (
    <motion.a
      href={link.href}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="group relative isolate overflow-hidden rounded-md px-3 py-3 text-sm text-neutral-800 xl:px-4 xl:text-[15px]"
    >
      <motion.span
        aria-hidden="true"
        variants={{
          rest: { clipPath: "inset(0 100% 0 0)" },
          hover: { clipPath: "inset(0 0% 0 0)" },
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ background: gradient }}
        className="absolute inset-0 -z-10"
      />

      <motion.span
        aria-hidden="true"
        variants={{
          rest: { x: "-150%", opacity: 0 },
          hover: { x: "350%", opacity: [0, 0.7, 0] },
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 left-0 -z-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <motion.span
        variants={{
          rest: { color: "#262626" },
          hover: { color: "#ffffff" },
        }}
        transition={{ duration: 0.25 }}
        className="relative z-10 whitespace-nowrap"
      >
        {link.label}
      </motion.span>
    </motion.a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white font-dm">
      <nav
        className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 md:px-8 lg:h-[88px] lg:px-10 xl:px-16 2xl:px-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="iMprexive home"
          className="min-w-0 shrink-0"
        >
          <img
            src="/assets/logos/IMPREXIVE_New_Logo 1.svg"
            alt="iMprexive"
            className="h-10 w-auto max-w-[155px] object-contain sm:h-12 sm:max-w-[185px] lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => (
            <AnimatedNavLink key={link.label} link={link} />
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 0.97 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-[10px] border border-black px-3 py-3 text-sm text-black lg:inline-flex xl:px-4 xl:text-[15px]"
        >
          Let's Create Together
          <ArrowUpRight size={17} />
        </motion.a>

        {/* Mobile / Tablet Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-black transition-colors hover:bg-neutral-50 lg:hidden sm:size-11"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile / Tablet Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full overflow-hidden border-t border-neutral-100 bg-white shadow-lg lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-1 px-4 py-4 sm:px-6 sm:py-5 md:px-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.05,
                  }}
                  className="rounded-md border-b border-neutral-100 px-4 py-4 text-base font-medium text-neutral-900 transition-colors hover:bg-purple-50 hover:text-purple-700"
                >
                  {link.label}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold text-white sm:mt-4"
                style={{ background: gradient }}
              >
                Let's Create Together
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "motion/react";
// import { Menu, X, ArrowUpRight } from "lucide-react";

// const navLinks = [
//   { label: "Who we are", href: "#who-we-are" },
//   { label: "What we do", href: "#what-we-do" },
//   { label: "Experiences", href: "#experiences" },
// ];

// const gradient =
//   "linear-gradient(90deg, #7334E4 0%, #8B31D3 23%, #B52BB5 42%, #ED2689 61%, #FF9222 100%)";

// function AnimatedNavLink({ link }) {
//   return (
//     <motion.a
//       href={link.href}
//       initial="rest"
//       animate="rest"
//       whileHover="hover"
//       className="group relative isolate overflow-hidden px-4 py-3 text-[15px] text-neutral-800"
//     >
//       {/* Left-to-right gradient reveal */}
//       <motion.span
//         aria-hidden="true"
//         variants={{
//           rest: { clipPath: "inset(0 100% 0 0)" },
//           hover: { clipPath: "inset(0 0% 0 0)" },
//         }}
//         transition={{
//           duration: 0.65,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         style={{ background: gradient }}
//         className="absolute inset-0 -z-10"
//       />

//       {/* Moving shine */}
//       <motion.span
//         aria-hidden="true"
//         variants={{
//           rest: { x: "-150%", opacity: 0 },
//           hover: { x: "350%", opacity: [0, 0.7, 0] },
//         }}
//         transition={{
//           duration: 0.9,
//           ease: "easeInOut",
//         }}
//         className="pointer-events-none absolute inset-y-0 left-0 -z-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
//       />

//       {/* Link text */}
//       <motion.span
//         variants={{
//           rest: { color: "#262626" },
//           hover: { color: "#ffffff" },
//         }}
//         transition={{ duration: 0.25 }}
//         className="relative z-10"
//       >
//         {link.label}
//       </motion.span>
//     </motion.a>
//   );
// }

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="sticky top-0 z-50 h-25 w-full bg-white font-dm">
//       <nav
//         className="mx-auto flex h-full w-full items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-18"
//         aria-label="Main navigation"
//       >
//         {/* Logo */}
//         <Link
//           to="/"
//           onClick={closeMenu}
//           aria-label="iMprexive home"
//           className="shrink-0"
//         >
//           <img
//             src="/assets/logos/IMPREXIVE_New_Logo 1.svg"
//             alt="iMprexive"
//             className="h-15 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center gap-4 lg:flex xl:gap-5">
//           {navLinks.map((link) => (
//             <AnimatedNavLink key={link.label} link={link} />
//           ))}
//         </div>

//         {/* Desktop CTA - No hover animation */}
//         {/* <a
//           href="#contact"
//           className="hidden items-center gap-2 hover:scale-95 rounded-[10px] border border-black px-5 py-3 text-[15px] text-black lg:inline-flex"
//         >
//           Let's Create Together
//           <ArrowUpRight size={17} />
//         </a> */}

//         <motion.a
//   href="#contact"
//   whileHover={{ scale: 0.97 }}
//   whileTap={{ scale: 0.99 }}
//   transition={{ duration: 0.2, ease: "easeOut" }}
//   className=" hidden items-center gap-2 hover:scale-95 rounded-[10px] border border-black px-5 py-3 text-[15px] text-black lg:inline-flex  "
// >
//   Let's Create Together
// </motion.a>

//         {/* Mobile Menu Toggle */}
//         <button
//           type="button"
//           onClick={() => setMenuOpen((open) => !open)}
//           className="flex size-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-black lg:hidden"
//           aria-label={
//             menuOpen ? "Close navigation menu" : "Open navigation menu"
//           }
//           aria-expanded={menuOpen}
//           aria-controls="mobile-navigation"
//         >
//           {menuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             id="mobile-navigation"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="absolute left-0 top-full w-full overflow-hidden border-t border-neutral-100 bg-white shadow-lg lg:hidden"
//           >
//             <div className="flex flex-col gap-1 px-5 py-5 sm:px-8">
//               {navLinks.map((link, index) => (
//                 <motion.a
//                   key={link.label}
//                   href={link.href}
//                   onClick={closeMenu}
//                   initial={{ opacity: 0, x: -12 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -8 }}
//                   transition={{
//                     duration: 0.25,
//                     delay: index * 0.05,
//                   }}
//                   className="border-b border-neutral-100 px-4 py-4 text-base font-medium text-neutral-900 transition-colors duration-300 hover:bg-purple-50 hover:text-purple-700"
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}

//               {/* Mobile CTA - Gradient without hover animation */}
//               <a
//                 href="#contact"
//                 onClick={closeMenu}
//                 className="mt-4 flex items-center justify-center gap-2 rounded-[10px] px-5 py-4 text-sm font-semibold text-white"
//                 style={{ background: gradient }}
//               >
//                 Let's Create Together
//                 <ArrowUpRight size={17} />
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
