import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-pink-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10"
    >
      <div className={`h-48 ${product.image} flex items-center justify-center`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <span className="text-white font-semibold">{product.category.toUpperCase()}</span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h4 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors duration-200">
          {product.name}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;