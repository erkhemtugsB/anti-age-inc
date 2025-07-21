import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ProductModal from './components/ProductModal';
import UsageSection from './components/UsageSection';
import Footer from './components/Footer';
import { useScrollEffect } from './hooks/useScrollEffect';
import { useModal } from './hooks/useModal';
import { scrollToProducts } from './utils/navigation';
import { products } from './data/products';
import Carousel from './components/Carousel';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScrollEffect();
  const { selectedProduct, isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        scrolled={scrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <HeroSection onShopNowClick={scrollToProducts} />

      <AboutSection />
      {/* Carousel Section */}
        <Carousel />
      <ProductsSection
        products={products}
        onProductClick={openModal}
      />

      <UsageSection />

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;