
import { motion } from "motion/react";
import GradientButton from "../components/GradientButton";

const gradient =
  "linear-gradient(90deg,#7334E4 0%,#8B31D3 23%,#B52BB5 42%,#ED2689 61%,#FF9222 100%)";

export default function Whatwedo() {
  return (
    <section className="w-full overflow-hidden">
      {/* Gradient tagline */}
      <div
        className="flex min-h-20 w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 font-manrope text-sm font-semibold text-white sm:gap-x-10 sm:text-lg md:min-h-23 md:gap-x-12 md:text-xl lg:justify-evenly lg:text-2xl"
        style={{ background: gradient }}
      >
        <h3>THINK BOLD.</h3>
        <h3>MAKE IT REAL.</h3>
        <h3>MAKE IT IMPREXIVE.</h3>
      </div>

      {/* Main content */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-20 xl:px-24">
        {/* Left column */}
        <div className="min-w-0 font-manrope font-extrabold">
          <h2 className="text-[clamp(2rem,4.2vw,3.06rem)] leading-[1.15] tracking-tight text-neutral-900">
            <span className="block">It starts with an idea.</span>
            <span className="block">It ends with</span>
            <motion.span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: gradient,
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              an impression.
            </motion.span>
          </h2>
        </div>

        {/* Right column */}
        <div className="flex min-w-0 flex-col items-start gap-7 lg:gap-8">
          <div className="font-manrope text-2xl font-semibold leading-snug text-neutral-900 sm:text-3xl">
            <h3>A room full of people.</h3>
            <h3>A world of possibilities.</h3>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[#5D6674] sm:text-lg">
            <p>
              We’re an event marketing partner for brands that want to
              connect. From the first conversation to the final curtain,
              we bring strategy, creativity and on-ground execution into
              one shared vision.
            </p>

            <p>
              A conference that sparks a conversation. An activation that
              invites participation. A celebration people carry home.
              Every detail has a purpose.
            </p>
          </div>

          <GradientButton href="#what-we-do" className="w-fit">
            Discover our expertise
          </GradientButton>
        </div>
      </div>
    </section>
  );
}





// import { motion } from "motion/react";
// import GradientButton from '../components/GradientButton';

// export default function Whatwedo() {
//   return (
//     <section>
//         <div className='min-w-full  font-manrope font-semibold text-2xl text-white min-h-23 flex items-center justify-evenly  bg-[linear-gradient(90deg,#7334E4_0%,#8B31D3_23%,#B52BB5_42%,#ED2689_61%,#FF9222_100%)]'>
//             <h3>THINK BOLD.</h3>
//             <h3>MAKE IT REAL.</h3>
//             <h3>MAKE IT IMPREXIVE.</h3>
//         </div>
//         <div className='min-w-full min-h-125 relative flex bg-[#ffffff] '><div className=" h-full w-1/2 ">
//         <div className='w-full h-full pl-24 pt-20 font-manrope font-extrabold text-[3.06rem]'>
//             <h2>It starts with an idea.</h2>
//         <h2>It ends with</h2>

//         <motion.h1
//   className="inline-block bg-[linear-gradient(90deg,#7334E4_0%,#8B31D3_23%,#B52BB5_42%,#ED2689_61%,#FF9222_100%)] bg-[length:200%_100%] bg-clip-text text-transparent"
//   animate={{
//     backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//   }}
//   transition={{
//     duration: 5,
//     repeat: Infinity,
//     ease: "linear",
//   }}
// >
//   an impression.
// </motion.h1>

//         </div>
        
        
        
//         </div>
//         <div className="h-full w-1/2 flex gap-8 flex-col" >
//         <div className=' w-full pt-20 font-manrope text-3xl font-semibold '>
//             <h3>A room full of people.</h3>
//             <h3>A world of possibilities.</h3>
//         </div>
//         <div className="pr-50 text-ms space-y-7 text-[#5D6674]">
//             <h6>We’re an event marketing partner for brands that want to connect. From the first conversation to the final curtain, we bring strategy, creativity and on-ground execution into one shared vision.</h6>
//             <h6>A conference that sparks a conversation. An activation that invites participation. A celebration people carry home. Every detail has a purpose.</h6>
//         </div>

//         <GradientButton className='w-fit  '>Discover our expertise</GradientButton>
//         </div></div>
       
//     </section>
//   )
// }
