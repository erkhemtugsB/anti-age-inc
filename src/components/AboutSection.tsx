import React from 'react';
import { Zap, Brain, Heart, Award } from 'lucide-react';
import Carousel from './Carousel';

const AboutSection: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Energy Boost",
      description: "Enhances mitochondrial performance and cellular energy production for sustained vitality throughout the day.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Improves cognitive function, memory, and focus by supporting optimal brain health and neural function.",
      gradient: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Heart,
      title: "Heart Health",
      description: "Promotes healthy blood circulation and cardiovascular function through enhanced cellular metabolism.",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-gray-900 text-center">
              What is Active NMN?
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
              Active NMN (Nicotinamide Mononucleotide) is a highly bioavailable form of NMN that helps boost NAD+ levels in the body. 
              NAD+ is essential for cellular energy production, mitochondrial function, and anti-aging mechanisms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits tiles */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-pink-500/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-full flex-shrink-0`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right side - Certificate */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-pink-500/30 hover:shadow-lg transition-all duration-300 max-w-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Product Certificate</h4>
                </div>
                <img 
                  src="/product-certificate.jpg" 
                  alt="Product Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;