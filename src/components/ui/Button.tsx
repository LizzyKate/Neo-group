import React from "react";
import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  fullWidth = false,
}) => {
  // Base button styles
  const baseStyles = "rounded-full font-medium transition duration-300";

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2",
    lg: "px-8 py-3 text-lg",
  };

  // Variant styles
  const variantStyles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-white text-purple-600 hover:bg-gray-100",
    outline:
      "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
    gradient:
      "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
  };

  // Width style
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
