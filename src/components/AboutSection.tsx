import React from 'react';
import { Zap, Brain, Heart } from 'lucide-react';

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
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-gray-900">
              What is Active NMN?
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Active NMN (Nicotinamide Mononucleotide) is a highly bioavailable form of NMN that helps boost NAD+ levels in the body. 
              NAD+ is essential for cellular energy production, mitochondrial function, and anti-aging mechanisms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-pink-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-full mb-6 mx-auto`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;