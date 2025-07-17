import React from 'react';

const Footer: React.FC = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer id="contact" className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
              <img
                src="logo.png"
                alt="AGS Anti Age INC Logo"
                className="h-10 w-auto"
              />
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
              {quickLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="block text-gray-400 hover:text-pink-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 AGS Anti Age INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;