import React from 'react';
import { Menu, Search, ShoppingCart, User, Heart } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  scrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Shop' },
    { href: '#blog', label: 'Blog' },
    { href: '#pages', label: 'Pages' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur-lg shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      }`}>
      {/* Top bar */}
      <div className="bg-green-400 text-black text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Contact: (555) 123-4567</span>
            <span>•</span>
            <span>Email: info@agsantiage.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>English</span>
            <span>•</span>
            <span>USD</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-gray-900">
                nutreko
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-pink-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-200 mt-2 pt-4">
              <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
                <User className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;