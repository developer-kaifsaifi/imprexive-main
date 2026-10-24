const gradient =
  "linear-gradient(90deg,#7334E4 0%,#8B31D3 23%,#B52BB5 42%,#ED2689 61%,#FF9222 100%)";

const certifications = [
  {
    src: "/assets/logos/one 1.svg",
    alt: "Certification 1",
  },
  {
    src: "/assets/logos/two 1.svg",
    alt: "Certification 2",
  },
  {
    src: "/assets/logos/three 1.svg",
    alt: "Certification 3",
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-[#061A32] text-center text-white">
      {/* Main Logo */}
      <div className="flex w-full items-center justify-center px-5 pb-7 pt-10 sm:pb-9 sm:pt-12">
        <img
          src="/assets/logos/IMPREXIVE-LOGO.svg"
          alt="Imprexive"
          className="h-auto w-[150px] object-contain sm:w-[180px] lg:w-[200px]"
        />
      </div>

      {/* Certification Heading */}
      <div className="w-full px-5">
        <h3 className="mx-auto max-w-3xl font-manrope text-sm font-medium leading-6 sm:text-base md:text-lg">
          An ISO/IEC 27001:2013, 9001:2015, 14001:2015 Certified Company
        </h3>
      </div>

      {/* Certification Logos */}
      <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-6 px-5 py-8 sm:gap-x-12 sm:py-10 md:gap-x-16">
        {certifications.map((certification) => (
          <div
            key={certification.src}
            className="flex min-w-0 items-center justify-center"
          >
            <img
              src={certification.src}
              alt={certification.alt}
              loading="lazy"
              className="h-10 w-auto max-w-[100px] object-contain sm:h-14 sm:max-w-[130px] lg:h-[72px] lg:max-w-[150px]"
            />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-white/10 px-5 py-6 sm:px-8 sm:py-7">
        <p className="mx-auto max-w-4xl font-dm text-xs leading-6 text-white/75 sm:text-sm">
          © Copyright {new Date().getFullYear()} - Imprexive Marketing
          Solution Pvt. Ltd.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-dm text-xs text-white/75 sm:text-sm">
          <a
            href="/privacy/"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </a>

          <span aria-hidden="true">|</span>

          <a
            href="/terms/"
            className="transition-colors hover:text-white"
          >
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="h-2 w-full sm:h-3"
        style={{ background: gradient }}
      />
    </footer>
  );
}