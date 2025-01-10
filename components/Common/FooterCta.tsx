import Image from 'next/image'
import React from 'react'
import BoltSvg from '../../public/bolt.svg'

export default function Cta() {
  return (
    <section id="cta" className="relative">
    <svg
      className="absolute top-0 left-0 w-full fill-[#f9f9fb]"
      preserveAspectRatio="none"
      width="1440"
      height="86"
      viewBox="0 0 1440 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 85.662C240 29.1253 480 0.857 720 0.857C960 0.857 1200 29.1253 1440 85.662V0H0V85.662Z"></path>
    </svg>
    <div className=" mx-auto px-4 py-32 flex flex-col items-center">
      <p className="text-xs font-semibold uppercase tracking-wide mb-9 flex items-center gap-2">
        <span className="bg-gray-900 text-white py-1 px-3 rounded-lg">HollywoodAI</span>
        Endless benefits, one subscription.
      </p>
      <h2 className="text-[40px] sm:text-[60px] md:text-[80px] font-bold text-center mb-8 leading-none">
        Start your <br /> free trial.
      </h2>
      <p className="text-lg text-gray-500 text-center mb-9 max-w-md">
        Enjoy your favourite movies in minutes by letting AI do the work for you.
      </p>
      <button className="flex items-center justify-center gap-3 bg-[#1a1a1a] text-white text-base font-semibold py-4 px-8 rounded-lg hover:scale-105 transition-transform">
        <span>Join HollywoodAI</span>
        <Image src={BoltSvg} alt="Bolt Icon" width={16} height={16} /> 
      </button>
    </div>
  </section>
  
  )
}
