"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset states on route change
    if (!isLoaded) {
      setShowContent(false);
    }

    // Start loading sequence
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
      // Small delay before showing content for smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }, 1500);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [pathname, isLoaded]);

  // Block rendering of children until loaded
  if (!showContent) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 backdrop-blur-md">
        {/* Main loader container */}
        <div className="relative flex flex-col items-center space-y-6">
          {/* Animated logo/brand area */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="relative"
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-white" />
            </motion.div>

            {/* Inner pulsing dot */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-32 h-1 bg-slate-200 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
            />
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-center"
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="text-sm font-medium text-slate-600 tracking-wide"
            >
              Welcome...
            </motion.p>
          </motion.div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.purple.500)_0%,_transparent_50%)]" />
        </div>
      </div>
    );
  }

  // Return null when content should show (loader is done)
  return null;
}