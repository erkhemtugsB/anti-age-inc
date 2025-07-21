import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  image: string;
  bgColor: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-cyan-200 to-cyan-300"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-pink-200 to-pink-300"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-300"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-blue-200 to-blue-300"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-purple-200 to-purple-300"
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
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-bold text-gray-900">Gallery</h4>
      </div>

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
                <div className={`h-full ${item.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt="Gallery image"
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
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
                <div className={`h-full ${item.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt="Gallery image"
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;