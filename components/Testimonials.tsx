import Image from 'next/image'
import React from 'react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100">
    <div className="container mx-auto">
      <div className="flex flex-col items-center p-20 rounded-3xl border border-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('/assets/world-map.png')" }}>
        <div className="bg-[#28027c1f] p-1 rounded-lg text-sm font-bold flex items-center gap-2 mb-5 text-[#28027c]">
          <span>Testimonials</span>
          <span className="text-xs opacity-60">⏺</span>
          <span className="opacity-60">TrustPilot</span>
        </div>
        <h2 className="text-5xl mb-10 text-center">What our members say.</h2>
        <div className="flex gap-10">
          <div className="flex flex-col items-center">
            <Image src="/assets/testimonial-1.png" alt="Olivia Chapman" width={77} height={77} className="mb-2" />
            <span className="text-lg font-bold text-gray-800">Olivia Chapman</span>
            <span className="text-lg font-medium text-gray-400">Student</span>
            <p className="mt-4 text-base font-medium text-center max-w-xs">"Hollywood AI made big promises and delivered on them! Absolutely cannot live without this tool!"</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/testimonial-2.png" alt="Eric Fisherman" width={77} height={77} className="mb-2" />
            <span className="text-lg font-bold text-gray-800">Eric Fisherman</span>
            <span className="text-lg font-medium text-gray-400">Professor</span>
            <p className="mt-4 text-base font-medium text-center max-w-xs">"Definitely worth the purchase if you are a busy person who stills want to keep up with the latest movies"</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/testimonial-3.png" alt="Anisong Silkum" width={77} height={77} className="mb-2" />
            <span className="text-lg font-bold text-gray-800">Anisong Silkum</span>
            <span className="text-lg font-medium text-gray-400">Student</span>
            <p className="mt-4 text-base font-medium text-center max-w-xs">"The summaries provide a really great overview of the movies. It's also very easy to use. 5/5!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
