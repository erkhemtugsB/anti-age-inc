import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroSectionProps {
  onShopNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onShopNowClick }) => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-background.webp)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-yellow-400 text-black rounded-full px-4 py-2">
                <span className="font-bold text-sm uppercase tracking-wide">Limited Edition</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight">
                <span className="text-yellow-400">
                  ELEVATE
                </span>
                <br />
                <span className="text-white">
                  YOUR GAINS
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Premium Japanese Active NMN supplements designed for bodybuilders
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onShopNowClick}
                className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
          
          {/* Right Content - Product Images */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Main product showcase */}
              <div className="flex items-center justify-center space-x-4">
                <div className="transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <img 
                    src="/public/black.png" 
                    alt="Active NMN Black" 
                    className="w-48 h-64 object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-10">
                  <img 
                    src="/public/pink.png" 
                    alt="Active NMN Pink" 
                    className="w-52 h-68 object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <img 
                    src="/public/black.png" 
                    alt="Active NMN Black Large" 
                    className="w-48 h-64 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                NEW
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current" />
                <span>4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;