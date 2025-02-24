import React from "react";
import { FeatureCardsProps } from "@/types";
import Button from "@/components/ui/Button";

const FeatureCards: React.FC<FeatureCardsProps> = ({
  cards,
  darkMode,
  isVisible,
}) => {
  return (
    <section
      className={`max-w-6xl mx-auto px-6 mb-16 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2
        className={`text-2xl md:text-3xl font-bold mb-12 text-center ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Why Choose Our Platform
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-2xl flex flex-col h-full"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div
              className={`${card.color} p-8 flex flex-col items-center transition-transform duration-500 group-hover:scale-105 flex-grow`}
            >
              <div className="text-white mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/90 text-center">{card.description}</p>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } p-4 flex justify-center mt-auto`}
            >
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
