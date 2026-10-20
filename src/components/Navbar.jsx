
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Experiences", href: "#experiences" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 h-25 font-dm z-50 w-full bg-[#ffffff]">
      <nav
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  min-w-full mx-auto flex h-full max-w-full items-center justify-between px-50 sm:px-8 lg:h-[88px] lg:px-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="iMprexive home"
          className=""
        >
            <img
    src="/assets/logos/IMPREXIVE_New_Logo 1.svg"
    alt="iMprexive"
    className="h-15 w-auto object-contain"
  />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center ml-60 gap-8 lg:flex xl:gap-11">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[1rem] text-neutral-800 transition-colors  xl:text-[15px]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#ef674b] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          
        </div>

        <div><a
            href="#contact"
            className="group inline-flex items-center font-dm border border-black rounded-[12px] gap-2  px-5 py-3 text-[1rem]  text-black "
          >
            Let's Create Together
           
          </a></div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-11 items-center justify-center rounded-full border border-neutral-200 text-black lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full overflow-hidden border-t border-neutral-100 bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5 sm:px-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-neutral-100 py-4 text-base font-medium text-neutral-900"
                >
                  {link.label}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#9c45d8] to-[#f0644b] px-5 py-4 text-sm font-semibold text-white"
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
