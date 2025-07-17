import React from 'react';

const UsageSection: React.FC = () => {
  const instructions = [
    {
      step: "1",
      title: "Dosage",
      description: "Take 250–500 mg daily, once or split into two doses",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      step: "2",
      title: "Best Time",
      description: "Morning on an empty stomach is preferred for optimal absorption",
      gradient: "from-yellow-400 to-yellow-500"
    },
    {
      step: "3",
      title: "Consultation",
      description: "Consult your doctor if you have health conditions or take medication",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Usage Instructions
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {instructions.map((instruction, index) => (
              <div key={index} className="text-center space-y-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${instruction.gradient} rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl`}>
                  {instruction.step}
                </div>
                <h4 className="text-lg font-semibold text-white">{instruction.title}</h4>
                <p className="text-gray-400">{instruction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;