import React from 'react'

export default function Steps() {
  return (
    <section id="steps">
      <div className="m-4 md:m-0 py-16">
        <div className="max-w-[1280px] mx-auto px-2 md:px-5 bg-[url('/assets/steps-bg.jpg')] 
          rounded-[50px] bg-[#010101] bg-cover py-[96px] text-white flex
          flex-col items-center">
          <h2 className="text-[64px] text-[#e5e6e6] leading-[1.2] tracking-tight
            max-w-[430px] w-full mb-16 text-center mx-auto font-bold">
            So, how does it work?
          </h2>
          <div className="flex relative flex-col md:flex-row">
            <div className="hidden md:block border-t-[#ffffff1a] border-[1px] w-[70%] absolute left-[50%]
              transform -translate-x-1/2 translate-y-[32px]"></div>
            {/* Step 1 */}
            <div className="flex  flex-col items-center px-[20px] group transition-all duration-700 hover:scale-110 hover:translate-y-[-12px]">
              <div className="w-16 h-16 border-[2px] border-[hsla(0, 0%, 100%, 0.17)] 
                bg-[#010101] rounded-full flex justify-center items-center text-[20px]
                text-white mb-10 relative z-2 group-hover:bg-white group-hover:text-[#010101]">
                <span>1</span>
              </div>
              <div className="text-[18px] font-light leading-6 max-w-[280px] w-full">
                Browse through our wide selection of the world's most popular movies
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center px-[20px] group transition-all duration-700 hover:scale-110 hover:translate-y-[-12px]">
              <div className="w-16 h-16 border-[2px] border-[hsla(0, 0%, 100%, 0.17)] 
                bg-[#010101] rounded-full flex justify-center items-center text-[20px]
                text-white mb-10 relative z-2 group-hover:bg-white group-hover:text-[#010101]">
                <span>2</span>
              </div>
              <div className="text-[18px] font-light leading-6 max-w-[280px] w-full">
                Simply select a movie you&apos;d like to have summarised and let our AI algorithms do the rest.
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center px-[20px] group transition-all duration-700 hover:scale-110 hover:translate-y-[-12px]">
              <div className="w-16 h-16 border-[2px] border-[hsla(0, 0%, 100%, 0.17)] 
                bg-[#010101] rounded-full flex justify-center items-center text-[20px]
                text-white mb-10 relative z-2 group-hover:bg-white group-hover:text-[#010101]">
                <span>3</span>
              </div>
              <div className="text-[18px] font-light leading-6 max-w-[280px] w-full">
                Take a couple of minutes to read and listen to the summary. And you&apos;re done!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
