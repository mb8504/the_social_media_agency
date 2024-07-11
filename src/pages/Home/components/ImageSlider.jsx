import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function ImageSlider() {
  const slides = [
    {
      type: 'video',
      src: '/influencer.mp4',
      content: {
        text: 'Build your presence.',
        button: 'Learn How',
      },
    },
    {
      type: 'image',
      src: '/img1.png',
      content: {
        text: 'Grow your business.',
        button: 'Learn How',
      },
    },
    {
      type: 'image',
      src: '/img2.png',
      content: {
        text: 'State of Social 2024',
        subtext: 'Your Guide to\nGrowing Your Business\nwith Social',
        button: 'Download',
      },
      customClass: 'left-custom',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="relative w-full h-42">
      <div className="video-container relative z-10">
        {slides[currentIndex].type === 'video' ? (
          <video className="w-full h-full object-cover" src={slides[currentIndex].src} autoPlay loop muted />
        ) : (
          <img className="w-full h-full object-cover" src={slides[currentIndex].src} alt="Slide" />
        )}

        {/* Text and Button Container slide 1 */}
        {slides[currentIndex].content && (
          <div className={`${slides[currentIndex].customClass} smHeaderBreak absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white ${currentIndex === 2 ? 'left-custom' : ''}`}>
            <div className="siteContainer text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leftHeader">
              {slides[currentIndex].content.text}
            </div>

            {slides[currentIndex].content.subtext && (
              <div className="siteContainer text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-left subtextLeft">
                {slides[currentIndex].content.subtext.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            )}
            <div id='buttonContainer' className='siteContainer'>
              <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-black bg-opacity-50 rounded-md text-white text-sm sm:text-base md:text-lg lg:text-xl buttonLeft">
                {slides[currentIndex].content.button}
              </button>
            </div>
          </div>
        )}
      </div>


      {/* DOTS */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-gray-600' : 'text-gray-300'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      {/* END DOTS */}
    </section>
  );
}

export default ImageSlider;
