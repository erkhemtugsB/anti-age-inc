import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  image: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      image: "/carousel1.jpg"
    },
    {
      id: 2,
      image: "/carousel2.jpg"
    },
    {
      id: 3,
      image: "/carousel3.jpg"
    },
    {
      id: 4,
      image: "/carousel4.jpg"
    },
    {
      id: 5,
      image: "/carousel5.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="w-full">
      <div className="relative group flex justify-center">
        {/* Navigation Arrows - Centered */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Single center image */}
        <div className="w-full max-w-2xl">
          <div className="h-128 overflow-hidden rounded-xl shadow-2xl transition-all duration-300">
            <img
              src={carouselItems[currentIndex].image}
              alt="Gallery image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Mobile version - horizontal scroll */}
      <div className="md:hidden mt-6 flex justify-center">
        <div className="w-full max-w-sm">
          <div className="h-96 rounded-xl overflow-hidden shadow-xl">
            <img
              src={carouselItems[currentIndex].image}
              alt="Gallery image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-pink-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;