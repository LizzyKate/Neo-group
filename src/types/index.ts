import { ReactNode } from "react";
import { Star, Candy } from "../utils/animation";
import { StaticImageData } from "next/image";

// Welcome offer displayed in the carousel
export interface WelcomeOffer {
  title: string;
  description: string;
  color: string;
  image: StaticImageData;
  url: string;
}

// Process step in the 3-step process section
export interface ProcessStep {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

// Feature card in the features section
export interface FeatureCard {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

// Button component props
export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

// Card component props
export interface CardProps {
  children: ReactNode;
  className?: string;
  darkMode?: boolean;
  hoverEffect?: boolean;
}

// Background elements props
export interface BackgroundElementsProps {
  darkMode: boolean;
  stars: Star[];
  candies: Candy[];
}

// Carousel props
export interface CarouselProps {
  items: WelcomeOffer[];
  darkMode: boolean;
}

// Feature cards section props
export interface FeatureCardsProps {
  cards: FeatureCard[];
  darkMode: boolean;
  isVisible: boolean;
}

// Process steps section props
export interface ProcessStepsProps {
  steps: ProcessStep[];
  darkMode: boolean;
  isVisible: boolean;
}
