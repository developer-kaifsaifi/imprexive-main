import { ArrowUpRight } from "lucide-react";

const gradient =
  "linear-gradient(90deg,#7334E4 0%,#8B31D3 23%,#B52BB5 42%,#ED2689 61%,#FF9222 100%)";

export default function Footer() {
  return (
    <footer className="bg-[#061A32] text-white">
      <div
        className="h-[3px] w-full"
        style={{ background: gradient }}
      />

      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 md:px-12 xl:px-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Logo */}
          <a href="#home" aria-label="Imprexive home">
            <img
              src="/assets/logos/IMPREXIVE_New_Logo 1.svg"
              alt="Imprexive"
              className="w-40 object-contain"
            />
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <a href="#who-we-are" className="transition hover:text-white">
              Who we are
            </a>
            <a href="#what-we-do" className="transition hover:text-white">
              What we do
            </a>
            <a href="#experiences" className="transition hover:text-white">
              Experiences
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              Contact <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Imprexive. All rights reserved.</p>
          <p>Good events. Great experiences.</p>
        </div>
      </div>
    </footer>
  );
}