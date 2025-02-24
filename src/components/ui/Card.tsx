import React from "react";
import { CardProps } from "@/types";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  darkMode = false,
  hoverEffect = false,
}) => {
  const baseStyles = "rounded-xl shadow-lg";
  const themeStyles = darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-900";
  const hoverStyles = hoverEffect
    ? "transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
    : "";

  return (
    <div className={`${baseStyles} ${themeStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
