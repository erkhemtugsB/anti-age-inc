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

  // Create extended array for infinite loop effect
  const extendedItems = [...carouselItems, ...carouselItems, ...carouselItems];
  const itemsToShow = 3;
  const startIndex = carouselItems.length + currentIndex;

  return (
    <div className="w-full">

      <div className="relative overflow-hidden group">
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

        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / itemsToShow)}%)` }}
        >
          {extendedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="w-1/3 flex-shrink-0 px-2">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-pink-500/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-48">
                <img
                  src={item.image}
                  alt="Gallery image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile version - horizontal scroll */}
      <div className="md:hidden mt-6">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {carouselItems.map((item) => (
            <div key={item.id} className="w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-pink-500/30 hover:shadow-lg transition-all duration-300 h-48">
                <img
                  src={item.image}
                  alt="Gallery image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;