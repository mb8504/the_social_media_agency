import React, { useState, useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const MediaSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRef = useRef(null);
    const sliderRef = useRef(null);

    const media = [
        { type: 'video', src: 'src/assets/influencer.mp4' },
        { type: 'image', src: 'src/assets/img1.jpg' },
        { type: 'image', src: 'src/assets/img2.jpeg' },
        // Add more media objects as needed
    ];

    const totalSlides = media.length;

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % totalSlides);
        }, 10000); // Adjust this interval as needed (in milliseconds)

        return () => clearInterval(interval);
    }, [currentSlide]);

    useEffect(() => {
        if (media[currentSlide].type === 'video' && videoRef.current) {
            videoRef.current.play();
        }
        // Adjust slider height based on current media type
        const sliderHeight = sliderRef.current.clientHeight;
        sliderRef.current.style.height = `${sliderHeight}px`;
    }, [currentSlide]);

    return (
        <div ref={sliderRef} className="slider relative w-full h-auto">
            {/* <button onClick={prevSlide} className="absolute left-0 p-2 bg-gray-200">
                <BsChevronCompactLeft size={24} />
            </button> */}
            <div className="w-full h-full flex justify-center items-center">
                {media[currentSlide].type === 'image' ? (
                    <img 
                        src={media[currentSlide].src} 
                        alt={`Slide ${currentSlide}`} 
                        className="w-full h-full object-cover" 
                    />
                ) : (
                    <video 
                        ref={videoRef} 
                        autoPlay 
                        muted 
                        loop 
                        className="w-full h-full object-cover"
                    >
                        <source src={media[currentSlide].src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            {/* <button onClick={nextSlide} className="absolute right-0 p-2 bg-gray-200">
                <BsChevronCompactRight size={24} />
            </button> */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                {media.map((_, index) => (
                    <RxDotFilled
                        key={index}
                        size={24}
                        className={`mx-1 cursor-pointer ${index === currentSlide ? 'text-blue-500' : 'text-gray-500'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MediaSlider;
