"use client"
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { bg1, bg2, bg3, bg4} from "@/assets";

// Sample hero data - replace with your actual content
const heroData = [
  {
    id: 1,
    image: bg1.src,
    title: "EFFICIENT IRRIGATION",
    subtitle: "SMART WATER MANAGEMENT",
    primaryButton: "View Solutions",
    secondaryButton: "Our Services"
  },
  {
    id: 2,
    image: bg2.src,
    title: "AUTOMATED CONTROL",
    subtitle: "SAVE TIME & RESOURCES",
    primaryButton: "Learn More",
    secondaryButton: "Contact Us"
  },
  {
    id: 3,
    image: bg3.src,
    title: "PRECISION WATERING",
    subtitle: "BOOST CROP YIELDS",
    primaryButton: "Explore Systems",
    secondaryButton: "Get Quote"
  },
  {
    id: 4,
    image: bg4.src,
    title: "SUSTAINABLE FARMING",
    subtitle: "EVERY DROP COUNTS",
    primaryButton: "Shop Now",
    secondaryButton: "Visit Farm"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index:number) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const currentSlide = heroData[currentIndex];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      {heroData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay with field pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>

          {/* Field rows pattern */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-green-300/40 to-transparent"
                style={{
                  top: `${20 + i * 4}%`,
                  left: `${-10 + i * 2}%`,
                  right: `${-10 + i * 2}%`,
                  transform: `rotate(${-2 + i * 0.3}deg)`,
                }}
              />
            ))}
          </div>

          {/* Animated tractor silhouette */}
          <div className="absolute bottom-10 right-16 opacity-50 transition-all duration-1000">
            <div className="w-24 h-16 bg-green-800/70 rounded-lg transform rotate-12 hover:rotate-6 transition-transform duration-500">
              <div className="w-8 h-8 bg-green-900/70 rounded-full absolute -top-2 left-2"></div>
              <div className="w-6 h-6 bg-green-900/70 rounded-full absolute bottom-1 right-2"></div>
              <div className="w-4 h-4 bg-green-900/70 rounded-full absolute bottom-1 left-4"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all group disabled:opacity-50 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button 
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all group disabled:opacity-50 shadow-lg"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Hero Content with Animation */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Main Heading */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight leading-none transition-all duration-700 ${
          isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
        }`}>
          {currentSlide.title}
        </h1>

        {/* Subtitle */}
        <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-16 tracking-wide transition-all duration-700 delay-150 ${
          isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
        }`}>
          {currentSlide.subtitle}
        </h2>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 items-center transition-all duration-700 delay-300 ${
          isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
        }`}>
          <button className="group relative bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl">
            <span>{currentSlide.primaryButton}</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button className="group relative bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>{currentSlide.secondaryButton}</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Progress Bar */}
        {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-yellow-400 rounded-full transition-all duration-75 ease-linear"
            style={{
              width: `${((currentIndex + 1) / heroData.length) * 100}%`
            }}
          />
        </div> */}
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
}