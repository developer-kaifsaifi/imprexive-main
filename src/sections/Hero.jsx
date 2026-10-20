import React from 'react'
import GradientButton from '../components/GradientButton'

export default function Hero () {
  return (
    <section className=''>
       
        <div className="px-24 relative  max-w-full min-h-screen bg-[url('/assets/images/hero.webp')] bg-cover bg-[center_20%] " >
        <div className='  '> <div className='mb-11 w-200 absolute top-16 leading-25 h-100 text-[5rem] text-white font-extrabold font-manrope'><h1>Good events</h1><h1> get noticed.</h1> <h1>Great experiences</h1><h1>stay with you.</h1> </div>

        </div>
        <div className='absolute top-129 flex items-center justify-center '>
            <div className='w-130 leading-tight h-20 text-[1.5rem] font-extralight text-white font-dm  '><h4>We bring brands and people together.</h4>
            <h4>With bold ideas. Thoughtful details.</h4>
            <h4>And moments that mean something.</h4>
            </div>
            <div className=''><GradientButton href="#contact" className="mt-3">
          Let's Create Together
        </GradientButton></div>
        </div>
        </div>

    </section>
  )
}
