import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Header() {
  return (
    <header className="flex-col justify-center bg-gradient-to-r from-[#70acd4] via-[#ca71ff] to-[#70acd4] bg-[length:200%_200%] py-[52px] h-[90vh] flex items-center relative animate-gradient">
      <div className="flex flex-col justify-center items-center">
        <div className="p-[5px_13px_3px_13px] bg-[#ffffff26] rounded-[20px] text-[10px] leading-[11px] font-bold flex items-center gap-[6px] mb-[32px]">
          <span className="text-white">Meet HollywoodAI</span>
          <span className="text-[6px] text-black"> ⏺</span>
          <span className="text-[#e5e6e6] opacity-60">Unleash the Power of AI</span>
        </div>
        <h1 className="text-[52px] sm:text-[64px] md:text-[84px]  font-bold leading-[77px] text-center text-white mb-[28px]">
          Ultimate AI <br className="" />
          Summariser
          <img src="assets/bolt.svg" alt="" className="translate-y-[4px]" />
        </h1>
        <p className="text-[20px] font-medium leading-[25px] max-w-[480px] w-full opacity-75 text-[#e5e6e6] text-center mb-[20px]">
          All-in-one platform to watch your favourite movies in minutes using AI.
        </p>
        <a className="py-[12px] px-[16px] font-semibold bg-[rgba(0,0,0,0.1)] flex justify-center items-center text-[17px] leading-[20px] gap-[16px] rounded-[48px] h-[64px] cursor-pointer transition duration-300 hover:bg-[rgba(0,0,0,0.2)]">
          <div className="w-[40px] h-[40px] p-[12px] rounded-full bg-white text-[rgb(55,57,61)] flex justify-center items-center">
            <FontAwesomeIcon icon={faPlay} className='h-[14px] w-[14px]' />
          </div>
          <span className="text-white">See how it works &nbsp;</span>
        </a>
      </div>
      <svg
        className="absolute left-0 right-0 bottom-[-2px] h-auto w-full block fill-[#f9f9fb]"
        width="1440"
        height="105"
        viewBox="0 0 1440 105"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"></path>
      </svg>
    </header>
  );
}
