import React from "react";
import { AiOutlineStock } from "react-icons/ai";

const TrendingTopics = () => {
  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="flex overflow-x-auto md:flex-wrap space-x-3 md:space-x-4 scrollbar-hide py-2">
        {/* 'ट्रेंडिङ विषयवस्तु' button */}
        <button className="bg-white text-[#303D7B] px-4 py-2 rounded-full flex items-center space-x-2 font-bold whitespace-nowrap ">
          <AiOutlineStock />
          <span>ट्रेंडिङ विषयवस्तु</span>
        </button>

        {/* Trending topics */}
        {["राजनीति", "नेपाल क्रिकेट", "बोल्न दे सरकार", "केन्द्रिय"].map((topic, index) => (
          <button
            key={index}
            className="bg-gray-200 text-blue-900 px-4 py-2 rounded-full shadow-md shadow-blue-400/30 whitespace-nowrap"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
