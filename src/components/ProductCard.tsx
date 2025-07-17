import React from 'react';
import { X, ShoppingBag, Zap, Brain, Heart, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);

  if (!isOpen || !product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.image.length) % product.image.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.image.length) % product.image.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.image.length) % product.image.length);
  };

  const benefits = [
    { icon: Zap, label: "Enhanced Energy", color: "text-yellow-400" },
    { icon: Brain, label: "Mental Clarity", color: "text-pink-400" },
    { icon: Heart, label: "Heart Health", color: "text-red-400" },
    { icon: Shield, label: "Anti-aging Support", color: "text-green-400" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-gray-900 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors duration-200"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="p-8 space-y-6">
        <div className="grid lg:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
              <img 
                src={product.image[currentImageIndex]} 
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {product.image.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full p-3 transition-colors duration-200 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full p-3 transition-colors duration-200 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.image.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {product.image.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                    index === currentImageIndex ? 'border-pink-500' : 'border-gray-600'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">{product.name}</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                ${product.price}
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">{product.description}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Key Features:</h4>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl space-y-5">
              <h4 className="text-xl font-semibold text-white">Product Benefits:</h4>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {React.createElement(benefit.icon, { className: `w-5 h-5 ${benefit.color}` })}
                    <span className="text-gray-300">{benefit.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25">
              Buy Now - ${product.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;