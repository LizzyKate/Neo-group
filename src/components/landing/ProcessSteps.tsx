import React from "react";
import { ProcessStepsProps } from "@/types";

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps,
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
        Get Started in Three Simple Steps
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg transition-transform duration-300 hover:-translate-y-2`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div
              className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white mb-4`}
            >
              {step.icon}
            </div>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 transform -translate-y-1/2 z-10">
                <div
                  className={`w-6 h-6 rotate-45 ${
                    darkMode
                      ? "border-t border-r border-gray-700"
                      : "border-t border-r border-gray-200"
                  }`}
                ></div>
              </div>
            )}

            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
