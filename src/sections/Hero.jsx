
// import GradientButton from '../components/GradientButton'

// export default function Hero () {
//   return (
//     <section className=''>
       
//         <div className="px-24 relative  max-w-full min-h-screen bg-[url('/assets/images/hero.webp')] bg-cover bg-[center_20%] " >
//         <div className='  '> <div className='mb-11 w-200 absolute top-16 leading-25 h-100 text-[5rem] text-white font-extrabold font-manrope'><h1>Good events</h1><h1> get noticed.</h1> <h1>Great experiences</h1><h1>stay with you.</h1> </div>

//         </div>
//         <div className='absolute top-129 flex items-center justify-center '>
//             <div className='w-130 leading-tight h-20 text-[1.5rem] font-extralight text-white font-dm  '><h4>We bring brands and people together.</h4>
//             <h4>With bold ideas. Thoughtful details.</h4>
//             <h4>And moments that mean something.</h4>
//             </div>
//             <div className=''><GradientButton href="#contact" className="mt-3">
//           Let's Create Together
//         </GradientButton></div>
//         </div>
//         </div>

//     </section>
//   )
// }


// after responsive

import GradientButton from "../components/GradientButton";

export default function Hero() {
  return (
    <section>
      <div className="relative h-[90vh] md:min-h-screen max-w-full overflow-hidden bg-[url('/assets/images/hero.webp')] bg-cover bg-[center_20%] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Heading */}
        <div className="absolute left-5 right-5 top-20 z-10 sm:left-8 md:left-12 lg:left-16 xl:left-24 xl:top-16">
          <h1 className="mb-11 font-manrope text-[clamp(2.5rem,5.2vw,5rem)] font-extrabold leading-[1.12] text-white">
            <span className="block">Good events</span>
            <span className="block">get noticed.</span>
            <span className="block">Great experiences</span>
            <span className="block">stay with you.</span>
          </h1>
        </div>

        {/* Description + Button */}
        <div className="absolute left-5 right-5 top-[480px] z-10 flex flex-col items-start gap-6 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16 lg:top-[540px] lg:flex-row lg:items-center  xl:left-24 xl:right-24 xl:top-[520px]">
          <div className="font-dm text-base font-extralight leading-tight text-white sm:text-lg lg:w-[520px] lg:text-xl xl:w-[520px] xl:text-2xl">
            <h4>We bring brands and people together.</h4>
            <h4>With bold ideas. Thoughtful details.</h4>
            <h4>And moments that mean something.</h4>
          </div>

          <GradientButton href="#contact" className="mt-0 shrink-0">
            Let's Create Together
          </GradientButton>
        </div>

      </div>
    </section>
  );
}