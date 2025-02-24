"use client";

import React from "react";
import { BackgroundElementsProps } from "@/types";

const BackgroundElements: React.FC<BackgroundElementsProps> = ({
  darkMode,
  stars,
  candies,
}) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main background gradients */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-b from-indigo-900 via-purple-900 to-purple-800"
            : "bg-gradient-to-b from-blue-400 via-sky-300 to-blue-200"
        } opacity-40`}
      ></div>

      {/* Candy land theme elements - larger blurred circles */}
      <div
        className={`absolute top-0 left-0 w-96 h-96 rounded-full ${
          darkMode ? "bg-purple-600" : "bg-pink-300"
        } opacity-30 blur-3xl`}
      ></div>
      <div
        className={`absolute top-40 right-10 w-64 h-64 rounded-full ${
          darkMode ? "bg-blue-700" : "bg-purple-200"
        } opacity-20 blur-3xl`}
      ></div>
      <div
        className={`absolute bottom-20 left-1/4 w-96 h-96 rounded-full ${
          darkMode ? "bg-indigo-800" : "bg-yellow-200"
        } opacity-30 blur-3xl`}
      ></div>
      <div
        className={`absolute bottom-10 right-1/4 w-64 h-64 rounded-full ${
          darkMode ? "bg-purple-700" : "bg-green-200"
        } opacity-20 blur-3xl`}
      ></div>

      {/* Cotton candy cloud-like elements */}
      <div className="absolute top-40 left-0 w-full h-32 bg-gradient-to-r from-pink-100 via-transparent to-purple-100 opacity-20 cloud-animation"></div>
      <div
        className="absolute bottom-1/3 left-0 w-full h-24 bg-gradient-to-r from-blue-100 via-transparent to-green-100 opacity-20 cloud-animation"
        style={{ animationDelay: "5s" }}
      ></div>

      {/* Animated stars (visible in dark mode) */}
      {darkMode &&
        stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.7,
              animation: `twinkle ${star.animationDuration}s infinite ease-in-out`,
            }}
          ></div>
        ))}

      {/* Floating candy elements */}
      {candies.map((candy) => (
        <div
          key={candy.id}
          className={`absolute opacity-20 ${
            darkMode ? "opacity-10" : "opacity-20"
          }`}
          style={{
            left: `${candy.left}%`,
            top: `${candy.top}%`,
            transform: `rotate(${candy.rotate}deg)`,
            animation: `float ${candy.animationDuration}s infinite ease-in-out alternate`,
          }}
        >
          {candy.type === 0 && (
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-300"></div>
          )}
          {candy.type === 1 && (
            <div className="w-10 h-5 rounded-full bg-gradient-to-r from-blue-300 to-teal-200 transform rotate-45"></div>
          )}
          {candy.type === 2 && (
            <div className="w-5 h-10 bg-gradient-to-r from-yellow-300 to-orange-200 rounded-lg"></div>
          )}
          {candy.type === 3 && (
            <div className="w-6 h-6 bg-gradient-to-r from-pink-300 to-red-200 rounded-full transform rotate-45"></div>
          )}
          {candy.type === 4 && (
            <div className="w-8 h-4 bg-gradient-to-r from-green-300 to-teal-200 rounded-md"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BackgroundElements;
