import React from 'react'

export default function FooterCopyright() {
  return (
    <section id="copyright" className="w-full">
    <div className="max-w-[1280px] mx-auto flex flex-col gap-6 justify-between items-center px-5 py-8">
      <form className="flex gap-3 w-full max-w-md items-center flex-col md:flex-row">
        <input
          type="text"
          className="w-full  px-7 py-5 bg-white/10 text-white text-base rounded-lg outline-none border-none"
          placeholder="Enter your email"
        />
        <button
          type="button"
          className="w-full max-w-[150px] px-6 py-4 text-sm font-bold text-white bg-white/10 rounded-lg cursor-not-allowed"
        >
          Subscribe
        </button>
      </form>
      <span className="text-sm text-[#e5e6e6]">
        2024 Copyright © Hollywood AI
      </span>
    </div>
  </section>
  
  )
}
