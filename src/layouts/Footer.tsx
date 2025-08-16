import { logo } from "@/assets";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-tl from-green-500 to-black text-white pt-10 font-sans">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo.src} alt="Logo" className="w-12 h-12 object-cover rounded-4xl" />
            <span className="font-bold text-2xl">IIWMASI</span>
          </div>
          <p className="text-sm text-green-100">
            Bringing sustainable irrigation solutions to every farm with smart technology and eco-friendly systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-green-600 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">About</a></li>
            <li><a href="#" className="hover:text-yellow-300">Product</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-300">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-green-600 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MdEmail className="text-yellow-300" /> info@iiwmasi.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-yellow-300" /> +91 00000 00000
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-yellow-300" /> Bhubaneswar, Odisha
            </li>
          </ul>
          {/* Social Media */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-yellow-300"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-yellow-300"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-center py-3 mt-8 text-sm border-t border-green-700">
        © {new Date().getFullYear()} iiwmasi. All rights reserved.
      </div>
    </footer>
  );
}

// import { logo } from "@/assets";
// import React from "react";
// // Mock icons (using simple SVG replacements)
// const FaFacebook = ({ size = 20, className = "" }) => (
//   <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//   </svg>
// );

// const FaTwitter = ({ size = 20, className = "" }) => (
//   <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//   </svg>
// );

// const FaInstagram = ({ size = 20, className = "" }) => (
//   <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35zm7.718 0c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35z"/>
//   </svg>
// );

// const MdEmail = ({ className = "" }) => (
//   <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//   </svg>
// );

// const MdPhone = ({ className = "" }) => (
//   <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//   </svg>
// );

// const MdLocationOn = ({ className = "" }) => (
//   <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//   </svg>
// );

// export default function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400"></div>
      
//       {/* Floating particles effect */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
//         <div className="absolute top-32 right-20 w-1 h-1 bg-green-300/40 rounded-full animate-ping"></div>
//         <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-teal-400/20 rounded-full animate-pulse delay-300"></div>
//         <div className="absolute top-20 right-1/4 w-1.5 h-1.5 bg-emerald-300/30 rounded-full animate-ping delay-700"></div>
//       </div>

//       <div className="relative container mx-auto px-6 pt-16 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
//           {/* Logo & About Section */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="flex items-center gap-3 group">
//               <div className="relative">
//                 <img 
//                   src={logo.src} 
//                   alt="IIWMASI Logo" 
//                   className="w-14 h-14 object-cover rounded-2xl shadow-lg ring-2 ring-emerald-400/20 group-hover:ring-emerald-400/40 transition-all duration-300" 
//                 />
//                 <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//               </div>
//               <div>
//                 <span className="font-bold text-3xl bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
//                   IIWMASI
//                 </span>
//                 <p className="text-emerald-200/80 text-sm font-medium">Smart Irrigation Solutions</p>
//               </div>
//             </div>
            
//             <p className="text-gray-300 text-base leading-relaxed max-w-md">
//               Revolutionizing agriculture with innovative irrigation technology. We bring sustainable, 
//               smart water management systems to farms worldwide, promoting eco-friendly practices 
//               and maximizing crop yields.
//             </p>
            
//             <div className="flex gap-4 pt-2">
//               {[
//                 { Icon: FaFacebook, href: "#", label: "Facebook" },
//                 { Icon: FaTwitter, href: "#", label: "Twitter" },
//                 { Icon: FaInstagram, href: "#", label: "Instagram" }
//               ].map(({ Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   className="group relative p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-teal-500/20 hover:border-emerald-400/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
//                   aria-label={label}
//                 >
//                   <Icon size={20} className="text-gray-300 group-hover:text-emerald-300 transition-colors duration-300" />
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6">
//             <div className="relative">
//               <h3 className="text-xl font-bold text-white mb-1">Quick Links</h3>
//               <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
//             </div>
            
//             <nav className="space-y-3">
//               {['Home', 'About', 'Products', 'Services', 'Contact', 'Blog'].map((link) => (
//                 <a
//                   key={link}
//                   href="#"
//                   className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
//                 >
//                   <div className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></div>
//                   <span className="group-hover:translate-x-1 transition-transform duration-300">
//                     {link}
//                   </span>
//                 </a>
//               ))}
//             </nav>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             <div className="relative">
//               <h3 className="text-xl font-bold text-white mb-1">Contact Us</h3>
//               <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
//             </div>
            
//             <div className="space-y-4">
//               {[
//                 { Icon: MdEmail, text: "info@iiwmasi.com", href: "mailto:info@iiwmasi.com" },
//                 { Icon: MdPhone, text: "+91 98765 43210", href: "tel:+919876543210" },
//                 { Icon: MdLocationOn, text: "Bhubaneswar, Odisha", href: "#" }
//               ].map(({ Icon, text, href }, index) => (
//                 <a
//                   key={index}
//                   href={href}
//                   className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
//                 >
//                   <div className="flex-shrink-0 p-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
//                     <Icon className="text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300" />
//                   </div>
//                   <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
//                     {text}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
//             <p>
//               © {new Date().getFullYear()} <span className="font-semibold text-emerald-300">IIWMASI</span>. 
//               All rights reserved.
//             </p>
//             <div className="flex gap-6">
//               <a href="#" className="hover:text-emerald-300 transition-colors duration-300">Privacy Policy</a>
//               <a href="#" className="hover:text-emerald-300 transition-colors duration-300">Terms of Service</a>
//               <a href="#" className="hover:text-emerald-300 transition-colors duration-300">Sitemap</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }