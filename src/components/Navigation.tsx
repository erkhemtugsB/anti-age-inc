import React from 'react';
import { Menu, Facebook } from 'lucide-react';

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
            <span>Contact: 310-906-8399</span>
            <span>•</span>
            <span>Email: agsantiage@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="https://www.facebook.com/profile.php?id=61577353568888&mibextid=wwXIfr&rdid=vJLMQ05zPWeaCius&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19BNox863U%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 hover:text-gray-700 cursor-pointer transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="AGS Anti Age INC Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.filter(item => !['#blog', '#pages'].includes(item.href)).map((item) => (
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
            {navItems.filter(item => !['#blog', '#pages'].includes(item.href)).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;