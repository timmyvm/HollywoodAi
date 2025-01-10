import Image from 'next/image'
import React from 'react'
import LogoLight from '../../public/assets/logo-light.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FooterLinks() {
  return (
    <section id="links" className="w-full border-y border-white/10">
  <div className="max-w-[1280px] mx-auto flex-col md:flex-row flex justify-between items-center px-5 py-8">
    <Image src={LogoLight} className='pb-5 md:pb-0' alt="Logo" width={132} height={32} />
    <div className="flex gap-8">
      <a
        className="flex items-center text-white text-sm cursor-not-allowed"
        href="#"
      >
        <span>Instagram</span>
      </a>
      <a
        className="flex items-center text-white text-sm cursor-not-allowed"
        href="#"
      >
        <span>Twitter</span>
      </a>
      <a
        className="flex items-center text-white text-sm cursor-not-allowed"
        href="#"
      >
        <span>Facebook</span>
      </a>
      <a
        className="flex items-center text-white text-sm cursor-not-allowed"
        href="#"
      >
        <span>TikTok</span>
      </a>
    </div>
  </div>
</section>

  )
}
