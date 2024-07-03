import React from 'react';

function Header() {
  return (
    <section className="relative w-full h-screen">
      <div className="video-container">
        <video className="w-full h-full object-cover" src="src/assets/influencer.mp4" autoPlay muted loop></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 top-3-4">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-center">
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
