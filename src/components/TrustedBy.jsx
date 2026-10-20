
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const logos = [
  "/assets/logos/DS.svg",
  "/assets/logos/SN.svg",
  "/assets/logos/UP.svg",
  "/assets/logos/SF.svg",
  "/assets/logos/GC.svg",
  "/assets/logos/TM.svg",
];

export default function TrustedBy() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll down = left, scroll up = right
const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#061A32] py-10"
    >
      <h2 className="mb-10 px-5 text-center text-4xl font-semibold text-white">
        Trusted by teams at
      </h2>

      <div className="w-full overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex pb-15 w-max"
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-5 pr-5 sm:gap-6 sm:pr-6"
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={`${group}-${logo}-${index}`}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-14 w-[150px] shrink-0 items-center justify-center rounded-sm bg-white p-2"
                >
                  <img
                    src={logo}
                    alt={`Trusted company ${(index % logos.length) + 1}`}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}











// import { motion } from "motion/react";

// export default function TrustedBy() {
//   return (
//     <section className="w-full h-71  bg-[#061A32] px-5 pt-10 ">
//         <div className='*:min-w-full   '>
//  <h2 className="mb-13 text-center text-4xl font-semibold text-white ">
//         Trusted by teams at
//       </h2>

//       <div className="mx-auto flex max-w-5xl items-center justify-center gap-5 sm:gap-6">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0.9 }}
//             whileHover={{ opacity: 1 }}
//             transition={{ duration: 0.2 }}
//             className="h-12 w-[150px] shrink-0 rounded-[4px] bg-white sm:w-[135px]"
//           />
//         ))}
//       </div>
//         </div>
     
//     </section>
//   );
// }



