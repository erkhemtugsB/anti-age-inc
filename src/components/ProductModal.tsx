import React from 'react';
import { X, ShoppingBag, Zap, Brain, Heart, Shield } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

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
          <div className={`h-64 ${product.image} rounded-xl flex items-center justify-center mb-6`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              <span className="text-white font-bold text-lg">{product.category.toUpperCase()}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              ${product.price}
            </p>
            <p className="text-gray-300 leading-relaxed">{product.description}</p>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl space-y-4">
              <h4 className="text-lg font-semibold text-white">Product Benefits:</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                    <span className="text-gray-300">{benefit.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25">
              Buy Now - ${product.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;