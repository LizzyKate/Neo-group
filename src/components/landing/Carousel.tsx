"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselProps } from "@/types";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  return (
    <section className="relative max-w-6xl mx-auto px-6 mb-16 overflow-hidden">
      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-full h-full flex-shrink-0 flex flex-col justify-center items-center text-white ${item.color} px-6 md:px-12 relative overflow-hidden`}
            >
              {/* Background candy patterns */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${10 + Math.random() * 30}px`,
                      height: `${10 + Math.random() * 30}px`,
                      opacity: 0.3,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  ></div>
                ))}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i + 10}
                    className="absolute w-16 h-8 rounded-full bg-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: 0.2,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  ></div>
                ))}
              </div>

              <Image src={item.image} width={50} height={50} alt={item.title} />
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center relative z-10">
                {item.title}
              </h1>
              <p className="text-xl md:text-2xl text-center mb-6 relative z-10">
                {item.description}
              </p>
              <Link href={item.url || "#"} passHref target="_blank">
                <Button
                  variant="secondary"
                  size="lg"
                  className="relative z-10 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Claim Now
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/40 transition"
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/40 transition"
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
