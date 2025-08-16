"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = "919348401071"; // Change to your number
  const whatsappMessage = "Hello! I’d like to know more about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="scrollTop"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 p-3 rounded-full shadow-lg bg-yellow-400 hover:bg-yellow-500 text-black z-50"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white z-50"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MessageCircle size={24} />
        </motion.div>
      </motion.a>
    </>
  );
}


// "use client";

// import { useState, useEffect } from "react";
// import { ArrowUp, MessageCircle, Bot } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function FloatingButtons() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isBotOpen, setIsBotOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const whatsappNumber = "919348401071"; // Change to your number
//   const whatsappMessage = "Hello! I’d like to know more about your services.";
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//     whatsappMessage
//   )}`;

//   return (
//     <>
//       {/* Scroll to Top */}
//       <AnimatePresence>
//         {isVisible && (
//           <motion.button
//             key="scrollTop"
//             onClick={scrollToTop}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 30 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-20 right-6 p-3 rounded-full shadow-lg bg-yellow-400 hover:bg-yellow-500 text-black z-50"
//           >
//             <ArrowUp size={20} />
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* WhatsApp */}
//       <motion.a
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         initial={{ opacity: 0, x: 30 }}
//         animate={{ opacity: 1, x: 0 }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ duration: 0.4 }}
//         className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white z-50"
//       >
//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <MessageCircle size={24} />
//         </motion.div>
//       </motion.a>

//       {/* Bot Button */}
//       <motion.button
//         onClick={() => setIsBotOpen(!isBotOpen)}
//         initial={{ opacity: 0, x: 30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4 }}
//         className="fixed bottom-6 left-6 p-3 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white z-50"
//       >
//         <Bot size={24} />
//       </motion.button>

//       {/* Bot Popup */}
//       <AnimatePresence>
//         {isBotOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-20 left-6 w-72 h-96 bg-white shadow-xl rounded-xl z-50 flex flex-col"
//           >
//             <div className="p-3 bg-blue-500 text-white rounded-t-xl flex justify-between">
//               <span>Chatbot</span>
//               <button onClick={() => setIsBotOpen(false)}>✕</button>
//             </div>
//             <div className="flex-1 p-3 overflow-y-auto">
//               {/* Chat content will go here */}
//               <p className="text-gray-500 text-sm">
//                 Hi! I’m your assistant. How can I help you today?
//               </p>
//             </div>
//             <div className="p-2 border-t">
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 className="w-full border rounded-lg p-2 text-sm"
//               />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
