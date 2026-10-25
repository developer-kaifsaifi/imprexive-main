
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";

const gradient =
  "linear-gradient(90deg, #7334E4 0%, #8B31D3 23%, #B52BB5 42%, #ED2689 61%, #FF9222 100%)";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-88px)] items-center justify-center overflow-hidden bg-white px-5 py-16 font-dm sm:px-8">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px] sm:h-[500px] sm:w-[500px]"
        style={{ background: gradient }}
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[18%] size-3 rounded-full opacity-70"
        style={{ background: "#8B31D3" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[18%] right-[10%] size-5 rounded-full opacity-70"
        style={{ background: "#FF9222" }}
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        {/* Error label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
          <span
            className="size-2 rounded-full"
            style={{ background: "#ED2689" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 sm:text-sm">
            Error 404
          </span>
        </div>

        {/* Animated 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="select-none text-[clamp(110px,25vw,250px)] font-bold leading-[0.85] tracking-[-0.09em]"
          style={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </motion.h1>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
          Page Not Found<span style={{ color: "#8B31D3" }}>.</span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
          Looks like this page took a different path.
          The page you are looking for doesn't exist or may have been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <motion.div
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link
              to="/"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200/50 transition-shadow hover:shadow-xl sm:w-auto"
              style={{ background: gradient }}
            >
              <Home size={17} />
              Back to Home
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>
        </div>

        {/* Footer note */}
        <div className="mt-12 flex items-center gap-3 text-xs text-neutral-400">
          <span className="h-px w-8 bg-neutral-200" />
          <span>Let's find your way back</span>
          <span className="h-px w-8 bg-neutral-200" />
        </div>
      </motion.section>
    </main>
  );
}
