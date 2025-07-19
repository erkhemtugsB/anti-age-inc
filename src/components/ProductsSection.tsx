import React from 'react';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';

interface ProductsSectionProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products, onProductClick }) => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-4xl font-bold text-gray-900">
            Our Premium Products
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully formulated Active NMN supplements, each designed for optimal bioavailability and effectiveness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;