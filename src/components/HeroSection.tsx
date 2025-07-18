import React from 'react';
import { ShoppingBag, Star, Shield, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onShopNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onShopNowClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/hero-background.webp" 
          alt="Premium supplements background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-20 flex items-end">
        <div className="max-w-2xl">
          <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-left">
              <span className="text-white drop-shadow-lg">
                Reclaim Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                Energy & Vitality
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
                {" "}
                Today
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-lg leading-relaxed drop-shadow-md text-left">
              Premium Japanese Active NMN supplements designed to boost NAD+ levels, 
              enhance cellular energy, and support your anti-aging journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button
              onClick={onShopNowClick}
              className="group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 flex items-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm drop-shadow-md">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm drop-shadow-md">Lab Tested</span>
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 animate-pulse opacity-60">
        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
      </div>
      <div className="absolute top-32 right-20 animate-pulse opacity-40" style={{ animationDelay: '1s' }}>
        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse opacity-50" style={{ animationDelay: '2s' }}>
        <div className="w-2.5 h-2.5 bg-pink-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;