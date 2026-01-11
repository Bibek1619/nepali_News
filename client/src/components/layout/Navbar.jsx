import React, { useState, useEffect, useRef } from "react";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import Logo from "../Logo";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navbarRef = useRef(null);
  const searchRef = useRef(null);
  const location = useLocation();
  
  const [activeNav, setActiveNav] = useState("");

  const navItems = [
    { name: "होमपेज", path: "/" },
    { name: "राजनीति", path: "/politics" },
    { name: "अर्थ", path: "/economy" },
    { name: "खेलकुद", path: "/sports" },
    { name: "प्रविधि", path: "/technology" },
    { name: "शिक्षा", path: "/education" },
    { name: "स्वास्थ्य", path: "/health" },
    { name: "पर्यटन", path: "/tourism" },
    { name: "मनोरञ्जन", path: "/entertainment" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarRect = navbarRef.current.getBoundingClientRect();
        setIsSticky(navbarRect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchOpen && searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  useEffect(() => {
    const current = navItems.find(item => location.pathname === item.path);
    setActiveNav(current?.name || "");
  }, [location.pathname]);

  return (
    <motion.nav
      ref={navbarRef}
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "shadow-md py-2" : "py-4"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center relative gap-4 lg:gap-0">
          {/* Logo */}
          <motion.div
            className={`transition-all duration-500 ${
              isSticky ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            layout
          >
            {isSticky && <Logo variant="compact" />}
          </motion.div>

          {/* Navigation Links */}
          <motion.ul 
            className="flex overflow-x-auto scrollbar-hide space-x-6 mx-auto pb-1 px-2"
            layout="position"
          >
            {navItems.map((item) => (
              <motion.li key={item.path} whileHover={{ y: -2 }} className="px-1">
                <Link
                  to={item.path}
                  className={`font-bold text-lg whitespace-nowrap transition duration-300 ${
                    activeNav === item.name 
                      ? "text-news-blue" 
                      : "text-news-darkGray hover:text-news-blue"
                  }`}
                >
                  {item.name}
                  {activeNav === item.name && (
                    <motion.div className="h-0.5 bg-news-blue mt-0.5" layoutId="activePage" />
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Search Bar and User Icon */}
          <div className="flex items-center space-x-4" ref={searchRef}>
            <div className={`relative ${searchOpen ? 'w-64' : 'w-10'} transition-all duration-300`}>
              <motion.input
                className={`pl-9 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-news-blue focus:border-transparent transition-all duration-300 ${
                  searchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
                placeholder="समाचार खोज्नुहोस"
                type="text"
                animate={{ width: searchOpen ? 250 : 0 }}
              />
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 p-1"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <FaSearch />
              </button>
            </div>

            <motion.div 
              className="p-2 rounded-full hover:bg-gray-100 transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRegUserCircle className="text-gray-500 text-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;