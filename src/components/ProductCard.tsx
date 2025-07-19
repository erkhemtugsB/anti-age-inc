import React from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-pink-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={product.image[0]} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 bg-white"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-pink-500 transition-colors duration-200">
          {product.name}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-2 rounded-full text-sm transition-all duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;