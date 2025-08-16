"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import FloatingButtons from "@/components/ScrollToTopButton";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (isInitialLoad) {
      // Initial load
      const timer = setTimeout(() => {
        setIsLoaded(true);
        setIsInitialLoad(false);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      // Route changes
      setIsLoaded(false);
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [pathname, isInitialLoad]);

  // Show farming-themed loader
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-25 to-lime-50 backdrop-blur-md">
        {/* Main loader container */}
        <div className="relative flex flex-col items-center space-y-8">
          {/* Animated farming scene */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="relative w-20 h-20"
          >
            {/* Rotating irrigation sprinkler */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Sprinkler arms */}
              <div className="relative">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>

            {/* Central hub */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg border-2 border-green-300" />
            </motion.div>

            {/* Water droplets animation */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  top: `${50 + 30 * Math.sin(i * Math.PI / 4)}%`,
                  left: `${50 + 30 * Math.cos(i * Math.PI / 4)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </motion.div>

          {/* Animated crop growth progress bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-40 h-2 bg-amber-100 rounded-full overflow-hidden border border-amber-200"
          >
            {/* Soil base */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-300 rounded-full" />
            
            {/* Growing progress */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full opacity-80"
            />

            {/* Small sprouts along the progress bar */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [2, -2, 2],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                className="absolute w-1 h-3 bg-green-400 rounded-t-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: '-4px',
                }}
              />
            ))}
          </motion.div>

          {/* Loading text with farming context */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-center"
          >
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="text-sm font-medium text-green-700 tracking-wide"
            >
              {isInitialLoad ? "Planting seeds..." : "Watering crops..."}
            </motion.p>
            
            {/* Subtle farming icons */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="flex justify-center space-x-3 mt-2 text-green-500 text-xs"
            >
              🌱 🚜 💧
            </motion.div>
          </motion.div>
        </div>

        {/* Agricultural background pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Field rows pattern */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                className="absolute w-full h-1 bg-green-400"
                style={{ top: `${15 + i * 10}%` }}
              />
            ))}
          </div>
          
          {/* Gentle gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.green.300)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.blue.300)_0%,_transparent_50%)]" />
        </div>
      </div>
    );
  }

  // Show main content with fade-in animation
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Header />
      {children}
      <Footer />
      <FloatingButtons />
    </motion.div>
  );
}