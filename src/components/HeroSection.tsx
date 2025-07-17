import React from 'react';
import { ShoppingBag, Star, Shield, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onShopNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onShopNowClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/539694/pexels-photo-539694.jpeg" 
          alt="Premium supplements background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-pink-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Reclaim Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
                Energy & Vitality
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium Japanese Active NMN supplements designed to boost NAD+ levels, 
              enhance cellular energy, and support your anti-aging journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onShopNowClick}
              className="group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 flex items-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Lab Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;