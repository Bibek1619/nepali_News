import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";
import newsData from "../../data/newsData";

const ProvinceNewsSection = () => {
  const [selectedProvince, setSelectedProvince] = useState("all");
  const scrollContainerRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Province list
  const provinces = [
    { id: "all", name: "सबै प्रदेश" },
    { id: "प्रदेश १", name: "प्रदेश १" },
    { id: "मधेश प्रदेश", name: "मधेश प्रदेश" },
    { id: "बागमती प्रदेश", name: "बागमती प्रदेश" },
    { id: "गण्डकी प्रदेश", name: "गण्डकी प्रदेश" },
    { id: "लुम्बिनी प्रदेश", name: "लुम्बिनी प्रदेश" },
    { id: "कर्णाली प्रदेश", name: "कर्णाली प्रदेश" },
    { id: "सुदूरपश्चिम प्रदेश", name: "सुदूरपश्चिम प्रदेश" },
  ];

  // Filter news data by selected province
  const displayNews = selectedProvince === "all" 
    ? newsData.filter(news => 
        provinces.some(province => province.id === news.category && province.id !== "all")
      )
    : newsData.filter(news => news.category === selectedProvince);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update scroll button visibility after a short delay
      setTimeout(() => {
        checkScrollButtons();
      }, 300);
    }
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftScroll(container.scrollLeft > 0);
      setShowRightScroll(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // Check scroll buttons on resize
  useEffect(() => {
    const handleResize = () => checkScrollButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initial check
  useEffect(() => {
    checkScrollButtons();
  }, []);

  return (
    <div className="w-full flex flex-col gap-[14px] pr-2">
      <div className="flex justify-between items-center mb-4 mt-8">
        <Title title="प्रदेश समाचार" viewAllLink="/province-news" />
      </div>

      {/* Province Selection with Scroll Buttons */}
      <div className="mb-4 relative">
        <div className="relative">
          {showLeftScroll && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-gray-600 text-lg" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-1"
          >
            {provinces.map((province) => (
              <button
                key={province.id}
                onClick={() => setSelectedProvince(province.id)}
                className={`px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap flex-shrink-0 ${
                  selectedProvince === province.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-400 transition-colors duration-300 cursor-pointer`}
              >
                {province.name}
              </button>
            ))}
          </div>

          {showRightScroll && (
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-gray-600 text-lg" />
            </button>
          )}
        </div>
      </div>

      {/* News List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayNews.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <SimpleDetailsNewCard news={news} type="province-news" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProvinceNewsSection;