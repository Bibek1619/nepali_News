import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Advertisement = ({ type = "rectangle" }) => {
  // Placeholder advertisement images
  const adImageSrc = 
    type === "banner" 
      ? "https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
      : type === "sidebar"
        ? "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        : "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";

  const height = 
    type === "banner" 
      ? "h-24 md:h-32" 
      : type === "sidebar"
        ? "h-64"
        : "h-40";

  return (
    <motion.div
      className={`w-full ${height} relative overflow-hidden rounded-lg shadow-md group`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-bl-lg z-10">
        विज्ञापन
      </div>
      
      <a href="#" className="block w-full h-full relative">
        <img 
          src={adImageSrc} 
          alt="Advertisement" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 text-gray-800 rounded-full p-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ExternalLink size={16} />
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Advertisement;