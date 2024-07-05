import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Header() {


  return (
    <section className="relative w-full h-screen">
      <div className="video-container relative">
        <video className="w-full h-full object-cover" src="src/assets/influencer.mp4" autoPlay muted loop></video>
        
        {/* Left Arrow */}
        <div id='leftArrow' className='absolute left-14 top-1/2 transform -translate-y-1/2 cursor-pointer text-white rounded-full bg-black/20'>
          <BsChevronCompactLeft size={50} />
        </div>

        {/* Right Arrow */}
        <div id='rightArrow' className='absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-white'>
          <BsChevronCompactRight size={50} />
        </div>

        {/* Text and Button Container */}
        <div className="lgBreak absolute md:top-3/4 top-2/4 w-full text-center text-white">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            Build your presence.
          </div>
          <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-black bg-opacity-50 rounded-md text-white text-sm sm:text-base md:text-lg lg:text-xl">
            Learn How
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
