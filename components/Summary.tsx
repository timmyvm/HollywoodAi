import Image from 'next/image'
import React from 'react'
import SummaryImage from '../public/assets/summary.png'

export default function Summary() {
  return (
    <section id="summary" className="mt-[40px]">
      <div className="py-16">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-wrap justify-between rounded-[50px] border border-gray-300 p-[80px]">
          <div className=" pl-10 summary__text w-full md:w-[47%]">
            <div className="summary__widget flex items-center gap-[6px] bg-[#dde6ff] px-[13px] py-[5px] rounded-[20px] mb-10 md:mb-[110px] w-fit text-[12px] font-bold leading-[11px]">
              <span className="summary__widget__title text-[#1e2227]">The future of entertainment</span>
              <span className="summary__widget__emoji text-[6px] opacity-60">⏺</span>
              <span className="summary__widget__description opacity-60">AI</span>
            </div>
            <h2 className="summary__title text-[32px] md:text-[39px] font-bold text-[#1e2227] leading-[40.95px] tracking-[-1.17px] mb-[25px]">
              Say goodbye to 2 hour movies.
            </h2>
            <p className="summary__para mb-5 text-[15px] md:text-[17px] leading-[1.47em] text-[#7e7f8e]">
              HollywoodAI is designed to help you get high-quality summaries of your favourite movies instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily digest any movie in just minutes instead of hours.
            </p>
          </div>

          <figure className="summary__figure mx-20 md:mx-0 w-full md:w-[47%] flex flex-col items-center bg-[#dde6ff] rounded-[12px] p-[30px]">
            <Image src={SummaryImage} alt="SummaryImage" className='w-full h-auto rounded-lg' />
            <span className="summary__figure__caption1 text-[17px] font-bold text-gray-700 leading-[18.7px] tracking-[-0.17px] mt-[36px] mb-[8px] text-center">
              Search. Summarise. Repeat.
            </span>
            <span className="summary__figure__caption2 text-[12px] text-gray-700">Powered by AI</span>
          </figure>
        </div>
      </div>
    </section>
  )
}
