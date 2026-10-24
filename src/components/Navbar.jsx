
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Who we are", href: "/about" },
  { label: "What we do", href: "/services" },
  { label: "Experiences", href: "/experience" },
];

const gradient =
  "linear-gradient(90deg, #7334E4 0%, #8B31D3 23%, #B52BB5 42%, #ED2689 61%, #FF9222 100%)";

function AnimatedNavLink({ link, onClick }) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="inline-flex"
    >
      <Link
        to={link.href}
        onClick={onClick}
        className="group relative inline-flex items-center px-3 py-3 text-sm text-neutral-800 xl:px-4 xl:text-[15px]"
      >
        <span className="relative whitespace-nowrap">
          {link.label}

          {/* Animated gradient underline */}
          <motion.span
            aria-hidden="true"
            variants={{
              rest: {
                scaleX: 0,
                opacity: 0,
              },
              hover: {
                scaleX: 1,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              background: gradient,
              transformOrigin: "left",
            }}
            className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full"
          />
        </span>
      </Link>
    </motion.div>
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
            <AnimatedNavLink
              key={link.label}
              link={link}
              onClick={closeMenu}
            />
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          whileHover={{ scale: 0.97 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="hidden shrink-0 lg:inline-flex"
        >
          <Link
            to="/contact"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] border border-black px-3 py-3 text-sm text-black xl:px-4 xl:text-[15px]"
          >
            Let's Talk Together
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>

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
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className="block rounded-md border-b border-neutral-100 px-4 py-4 text-base font-medium text-neutral-900 transition-colors hover:bg-purple-50 hover:text-purple-700"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold text-white sm:mt-4"
                style={{ background: gradient }}
              >
                Let's Talk Together
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
