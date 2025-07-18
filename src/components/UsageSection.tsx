import React from 'react';
import { Clock, Coffee, UserCheck } from 'lucide-react';

const UsageSection: React.FC = () => {
  const instructions = [
    {
      step: "1",
      title: "Dosage",
      description: "Take 250–500 mg daily, once or split into two doses",
      gradient: "from-pink-500 to-pink-600",
      icon: UserCheck,
      detail: "Start with a lower dose and gradually increase as your body adapts to the supplement."
    },
    {
      step: "2",
      title: "Best Time",
      description: "Morning on an empty stomach is preferred for optimal absorption",
      gradient: "from-yellow-400 to-yellow-500",
      icon: Coffee,
      detail: "Taking NMN in the morning aligns with your body's natural circadian rhythm."
    },
    {
      step: "3",
      title: "Consultation",
      description: "Consult your doctor if you have health conditions or take medication",
      gradient: "from-green-500 to-green-600",
      icon: Clock,
      detail: "Always prioritize safety and get professional medical advice when needed."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Usage Instructions
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500/30 via-yellow-400/30 to-green-500/30 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-16">
            {instructions.map((instruction, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} text-center md:text-inherit`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 p-8 hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center md:justify-start space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${instruction.gradient} rounded-full flex items-center justify-center`}>
                          <instruction.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-white">{instruction.title}</h4>
                      </div>
                      <p className="text-lg text-gray-300 font-medium">{instruction.description}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{instruction.detail}</p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0 my-8 md:my-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${instruction.gradient} rounded-full flex items-center justify-center shadow-lg border-4 border-gray-900`}>
                    <span className="text-white font-bold text-xl">{instruction.step}</span>
                  </div>
                  {/* Timeline connector dots */}
                  {index < instructions.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-gray-600 to-transparent rounded-full md:hidden"></div>
                  )}
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;