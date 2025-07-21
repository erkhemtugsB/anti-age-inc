import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  instructor: string;
  students: string;
  rating: number;
  image: string;
  bgColor: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Health & Wellness",
      instructor: "Dr. Sarah Johnson",
      students: "28,606 students",
      rating: 4.8,
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-cyan-200 to-cyan-300"
    },
    {
      id: 2,
      title: "Nutrition Science",
      instructor: "Prof. Michael Chen",
      students: "68,895 students",
      rating: 4.9,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-pink-200 to-pink-300"
    },
    {
      id: 3,
      title: "Anti-Aging Research",
      instructor: "Dr. Emily Rodriguez",
      students: "114,742 students",
      rating: 4.7,
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-300"
    },
    {
      id: 4,
      title: "Cellular Biology",
      instructor: "Dr. James Wilson",
      students: "111,255 students",
      rating: 4.8,
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-blue-200 to-blue-300"
    },
    {
      id: 5,
      title: "Supplement Science",
      instructor: "Dr. Lisa Thompson",
      students: "95,432 students",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-gradient-to-br from-purple-200 to-purple-300"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, carouselItems.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, carouselItems.length - 2)) % Math.max(1, carouselItems.length - 2));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-bold text-gray-900">Educational Resources</h4>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            disabled={currentIndex >= carouselItems.length - 3}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-1/3 flex-shrink-0 px-2">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-pink-500/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className={`h-32 ${item.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <h5 className="font-semibold text-gray-900 text-sm">{item.title}</h5>
                  <p className="text-xs text-gray-600">{item.instructor}</p>
                  
                  <div className="flex items-center space-x-1">
                    {renderStars(item.rating)}
                  </div>
                  
                  <p className="text-xs text-gray-500">{item.students}</p>
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
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-pink-500/30 hover:shadow-lg transition-all duration-300">
                <div className={`h-32 ${item.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <h5 className="font-semibold text-gray-900 text-sm">{item.title}</h5>
                  <p className="text-xs text-gray-600">{item.instructor}</p>
                  
                  <div className="flex items-center space-x-1">
                    {renderStars(item.rating)}
                  </div>
                  
                  <p className="text-xs text-gray-500">{item.students}</p>
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