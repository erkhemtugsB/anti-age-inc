import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Menu, Heart, Star, Shield, Zap, Brain, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  category: 'black' | 'pink';
  size: 'small' | 'large';
}

const products: Product[] = [
  {
    id: 1,
    name: "Active NMN Black 2.59 cal",
    price: 199,
    description: "Premium formulation with enhanced bioavailability for optimal NAD+ conversion.",
    features: ["2.59 cal concentration", "Enhanced absorption", "Premium black formulation"],
    image: "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
    category: 'black',
    size: 'small'
  },
  {
    id: 2,
    name: "Active NMN Black 4.28 cal",
    price: 249,
    description: "Maximum strength formulation for advanced anti-aging support and cellular energy.",
    features: ["4.28 cal concentration", "Maximum potency", "Advanced bioactivity"],
    image: "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900",
    category: 'black',
    size: 'large'
  },
  {
    id: 3,
    name: "Active NMN Pink (Small)",
    price: 199,
    description: "Gentle yet effective formulation perfect for daily wellness and vitality support.",
    features: ["Gentle formulation", "Daily wellness support", "Optimal bioavailability"],
    image: "bg-gradient-to-br from-pink-500 via-pink-400 to-rose-500",
    category: 'pink',
    size: 'small'
  },
  {
    id: 4,
    name: "Active NMN Pink (Large)",
    price: 249,
    description: "Enhanced large-size formulation for comprehensive anti-aging and energy support.",
    features: ["Large size format", "Extended supply", "Enhanced potency"],
    image: "bg-gradient-to-br from-pink-600 via-pink-500 to-pink-700",
    category: 'pink',
    size: 'large'
  }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  AGS Anti Age INC
                </h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Home</a>
                <a href="#products" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Products</a>
                <a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">About</a>
                <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Contact</a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-pink-400">Home</a>
              <a href="#products" className="block px-3 py-2 text-gray-300 hover:text-pink-400">Products</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-pink-400">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-pink-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(236,72,153,0.03)_50%,transparent_52%)] bg-[length:20px_20px]"></div>
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
                onClick={scrollToProducts}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What is Active NMN?
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Active NMN (Nicotinamide Mononucleotide) is a highly bioavailable form of NMN that helps boost NAD+ levels in the body. 
                NAD+ is essential for cellular energy production, mitochondrial function, and anti-aging mechanisms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">Energy Boost</h4>
                <p className="text-gray-400">Enhances mitochondrial performance and cellular energy production for sustained vitality throughout the day.</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-6 mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">Mental Clarity</h4>
                <p className="text-gray-400">Improves cognitive function, memory, and focus by supporting optimal brain health and neural function.</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">Heart Health</h4>
                <p className="text-gray-400">Promotes healthy blood circulation and cardiovascular function through enhanced cellular metabolism.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Premium Products
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully formulated Active NMN supplements, each designed for optimal bioavailability and effectiveness.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => openModal(product)}
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
            ))}
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Usage Instructions
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white">Dosage</h4>
                <p className="text-gray-400">Take 250–500 mg daily, once or split into two doses</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white">Best Time</h4>
                <p className="text-gray-400">Morning on an empty stomach is preferred for optimal absorption</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white">Consultation</h4>
                <p className="text-gray-400">Consult your doctor if you have health conditions or take medication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                AGS Anti Age INC
              </h4>
              <p className="text-gray-400">
                Premium Japanese NMN supplements for cellular health and anti-aging support.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <p>Email: agsantiage@gmail.com</p>
                <p>Phone: 310-906-8399</p>
                <p>Address: 180 S Western Ave Unit #95<br />Los Angeles, CA 90005</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white">Quick Links</h5>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-pink-400 transition-colors duration-200">Home</a>
                <a href="#products" className="block text-gray-400 hover:text-pink-400 transition-colors duration-200">Products</a>
                <a href="#about" className="block text-gray-400 hover:text-pink-400 transition-colors duration-200">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-pink-400 transition-colors duration-200">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 AGS Anti Age INC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-gray-900 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="p-8 space-y-6">
              <div className={`h-64 ${selectedProduct.image} rounded-xl flex items-center justify-center mb-6`}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShoppingBag className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">{selectedProduct.category.toUpperCase()}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  ${selectedProduct.price}
                </p>
                <p className="text-gray-300 leading-relaxed">{selectedProduct.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
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
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">Enhanced Energy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-pink-400" />
                      <span className="text-gray-300">Mental Clarity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-gray-300">Heart Health</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Anti-aging Support</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25">
                  Buy Now - ${selectedProduct.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;