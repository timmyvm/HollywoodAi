import { faBarsStaggered, faCirclePlay, faHandsHoldingCircle, faMobile, faPen, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Features() {
  return (
    <section className="mt-10">
      <div className="py-16">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col items-center">
          <h1 className="text-[53px] font-bold mb-5 text-center tracking-tight">
            The future of AI.
          </h1>
          <p className="text-lg leading-6 text-center text-[#3c4b62] mb-10 max-w-[500px] font-normal">
            HollywoodAI is designed to help you enjoy high-quality summaries instantly, without breaking a sweat.
            It&apos;s designed to help you enjoy high-quality summaries instantly, without breaking a sweat.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex gap-5">
              <div className="flex-none w-11 h-11 text-gray-800 bg-gray-200 flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">
                <FontAwesomeIcon className='w-4' icon={faPen}/>
              </div> 
              <div>
                <h4 className="text-lg font-bold text-[#2c2e48] mb-2">AI Generated Summaries</h4>
                <p className="text-sm leading-6 text-gray-600">Save time with summaries of the world's best movies.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex gap-5">
              <div className="flex-none w-11 h-11 text-gray-800 bg-gray-200 flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">
                <FontAwesomeIcon className='w-4' icon={faCirclePlay}/>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2c2e48] mb-2">Read or Listen</h4>
                <p className="text-sm leading-6 text-gray-600">Switch between reading and listening modes seamlessly.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex gap-5">
              <div className="flex-none w-11 h-11 text-gray-800 bg-gray-200 flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">      
                <FontAwesomeIcon className='w-4' icon={faBarsStaggered}/>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2c2e48] mb-2">Find Your Next Flick</h4>
                <p className="text-sm leading-6 text-gray-600">
                  Explore our movie lists and personalized recommendations.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex gap-5">
              <div className="flex-none w-11 h-11 text-gray-800 bg-gray-200 flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">
                <FontAwesomeIcon className='w-4' icon={faMobile}/>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2c2e48] mb-2">Multi Platform Access</h4>
                <p className="text-sm leading-6 text-gray-600">Enjoy your favourite movies on any device.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex gap-5">
              <div className="flex-none w-11 h-11 text-gray-800 bg-gray-200 flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">
                <FontAwesomeIcon className='w-4' icon={faShield}/>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2c2e48] mb-2">Payment Gateways</h4>
                <p className="text-sm leading-6 text-gray-600">We securely process all card payments.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex gap-5">
              <div className="flex-none w-11 h-11 text-gray-800 bg-gray-200 flex justify-center items-center rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">
                <FontAwesomeIcon className='w-4' icon={faHandsHoldingCircle}/>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2c2e48] mb-2">Eco-Friendly Option</h4>
                <p className="text-sm leading-6 text-gray-600">
                  HollywoodAI donates 10% of profits to charities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
