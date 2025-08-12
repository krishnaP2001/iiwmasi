"use client";
// import React, { useState, useEffect } from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
// import { MdEmail, MdLocationOn } from "react-icons/md";
// import { navLinks } from "../utils/NavLinks";
// import { logo } from "../assets";

// export default function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<any>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="w-full font-sans relative z-50">
//       {/* Top Bar */}
//       <div className="bg-green-800 text-white text-sm py-2 px-4 flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-1">
//             <MdEmail className="text-yellow-300" /> info@.com
//           </div>
//           <div className="flex items-center gap-1">
//             <MdLocationOn className="text-yellow-300" /> Bhubaneswar , Odisha
//           </div>
//         </div>
//         <div className="flex gap-3">
//           <a href="#" className="hover:text-yellow-300"><FaFacebook /></a>
//           <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
//           <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div
//         className={`bg-gray-200 text-black px-6 flex justify-between items-center transition-all duration-300 ${
//           isSticky ? "fixed top-0 left-0 w-full shadow-lg z-50 py-3" : "py-4"
//         }`}
//       >
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src={logo.src} alt="Logo" className="w-24 h-24" />
//           <span className="font-bold text-xl">IIWMASI</span>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-6 font-medium relative">
//           {navLinks.map((link, idx) => (
//             <div
//               key={idx}
//               className="relative group"
//               onMouseEnter={() => setOpenDropdown(idx)}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <a
//                 href={link.href}
//                 className="relative px-2 py-1 overflow-hidden"
//                 onMouseEnter={(e) => {
//                   const ripple = document.createElement("span");
//                   ripple.className =
//                     "absolute bg-yellow-300 rounded-full animate-ripple";
//                   ripple.style.left = `${e.nativeEvent.offsetX}px`;
//                   ripple.style.top = `${e.nativeEvent.offsetY}px`;
//                   ripple.style.width = ripple.style.height = "10px";
//                   e.currentTarget.appendChild(ripple);
//                   setTimeout(() => ripple.remove(), 600);
//                 }}
//               >
//                 {link.label}
//               </a>

//               {/* Dropdown */}
//               {link.subMenu && openDropdown === idx && (
//                 <div className="absolute left-0 top-full mt-2 bg-white text-green-800 shadow-lg rounded-lg overflow-hidden animate-fadeInUp">
//                   {link.subMenu.map((sub, subIdx) => (
//                     <a
//                       key={subIdx}
//                       href={sub.href}
//                       className="block px-4 py-2 hover:bg-green-100"
//                     >
//                       {sub.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setMobileMenu(!mobileMenu)}
//         >
//           {mobileMenu ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="bg-green-700 text-white px-4 py-3 md:hidden animate-fadeInUp">
//           {navLinks.map((link, idx) => (
//             <div key={idx} className="border-b border-green-500 py-2">
//               <div
//                 className="flex justify-between items-center"
//                 onClick={() =>
//                   setOpenDropdown(openDropdown === idx ? null : idx)
//                 }
//               >
//                 <a href={link.href}>{link.label}</a>
//                 {link.subMenu && (
//                   <span className="cursor-pointer">
//                     {openDropdown === idx ? "-" : "+"}
//                   </span>
//                 )}
//               </div>

//               {/* Mobile Submenu */}
//               {link.subMenu && openDropdown === idx && (
//                 <div className="ml-4 mt-2">
//                   {link.subMenu.map((sub, subIdx) => (
//                     <a
//                       key={subIdx}
//                       href={sub.href}
//                       className="block py-1 text-sm hover:text-yellow-300"
//                     >
//                       {sub.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { logo } from "@/assets";
import { navLinks } from "../utils/NavLinks";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setMobileMenu(false);
  };

  return (
    <header className="w-full font-sans relative z-50">
      {/* Elegant Top Bar with Gradient */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-sm py-3 px-6 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="relative flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-amber-200 transition-colors duration-300">
              <MdEmail className="text-amber-300 text-base" />
              <span className="font-medium">info@iiwmasi.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-amber-200 transition-colors duration-300">
              <MdLocationOn className="text-amber-300 text-base" />
              <span className="font-medium">Bhubaneswar, Odisha</span>
            </div>
          </div>

          <div className="flex gap-4">
            {[FaFacebook, FaTwitter, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-amber-300 hover:text-emerald-800 transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header with Glass Effect */}
      <div
        className={`${
          isSticky
            ? "fixed top-0 left-0 w-full bg-gradient-to-l from-green-500 to-black backdrop-blur-lg shadow-2xl py-2"
            : "bg-gradient-to-l from-green-500 to-black backdrop-blur-sm py-6"
        } transition-all duration-500 ease-out border-b border-black-100`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo with Hover Animation */}
          <div className="flex items-center group cursor-pointer bg-black rounded-xl shadow-lg mr-4">
            <div className="relative ">
              <img
                src={logo.src}
                alt="IIWMASI Logo"
                className="w-20 h-20 object-cover rounded-xl"
              />
              {/* <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div> */}
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl bg-gradient-to-r from-gray-100 to-gray-50 bg-clip-text text-transparent">
                IIWMASI
              </span>
              <span className="text-xs text-gray-300 font-medium tracking-wide">
                Excellence in Innovation
              </span>
            </div>
          </div>

          {/* Desktop Navigation with Advanced Hover Effects */}
          <nav className="hidden lg:flex gap-1 font-medium relative">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`relative px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 bg-emerald-50 group-hover:text-emerald-700 group-hover:bg-emerald-50 group-hover:shadow-lg ${
                    openDropdown === idx ? "bg-emerald-50 text-emerald-700" : ""
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {link.subMenu && (
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                </a>

                {/* Enhanced Dropdown */}
                {link.subMenu && openDropdown === idx && (
                  <div className="absolute left-0 top-full mt-2 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden border border-gray-100 min-w-[220px] animate-in slide-in-from-top-2 duration-300">
                    <div className="p-2">
                      {link.subMenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.href}
                          className="block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-700 transition-all duration-200 text-gray-700 font-medium"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Modern Mobile Menu Button */}
          <button
            className="lg:hidden relative w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-100 to-teal-100 flex items-center justify-center hover:from-emerald-200 hover:to-teal-200 transition-all duration-300 hover:scale-105"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div className="relative">
              {mobileMenu ? (
                <FaTimes className="text-emerald-700 text-xl transition-transform duration-300" />
              ) : (
                <FaBars className="text-emerald-700 text-xl transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      {mobileMenu && (
        <div
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-40"
          onClick={closeAllDropdowns}
        >
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile menu header */}
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logo.src} alt="Logo" className="w-10 h-10" />
                  <span className="font-bold text-lg text-emerald-700">
                    IIWMASI
                  </span>
                </div>
                <button
                  onClick={closeAllDropdowns}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <FaTimes className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Mobile menu items */}
            <div className="p-4">
              {navLinks.map((link, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-50 last:border-b-0"
                >
                  <div className="flex justify-between items-center py-4 px-2">
                    <a
                      href={link.href}
                      className="flex-1 text-gray-700 hover:text-emerald-700 font-medium transition-colors duration-200"
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                    </a>
                    {link.subMenu && (
                      <button
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-100 transition-colors duration-200"
                        onClick={() =>
                          setOpenDropdown(openDropdown === idx ? null : idx)
                        }
                      >
                        <FaChevronDown
                          className={`text-xs transition-transform duration-300 ${
                            openDropdown === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {link.subMenu && openDropdown === idx && (
                    <div className="ml-4 pb-4 space-y-1 animate-in slide-in-from-top-2 duration-300">
                      {link.subMenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.href}
                          className="block py-3 px-4 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                          onClick={closeAllDropdowns}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile social links */}
            <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="flex justify-center gap-4">
                {[FaFacebook, FaTwitter, FaInstagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 hover:scale-110"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
