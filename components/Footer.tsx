
import React from 'react'
import Cta from './Common/FooterCta'
import FooterLinks from './Common/FooterLinks'
import FooterCopyright from './Common/FooterCopyright'

export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(_circle_at_0%_-30%,_#a12a91,_rgba(33,_13,_123,_0.83),_transparent,_transparent,_transparent_)] bg-[black] mt-[120px] text-[white]">
        <Cta/>
        <FooterLinks/>
        <FooterCopyright/>
    </footer>
  )
}
