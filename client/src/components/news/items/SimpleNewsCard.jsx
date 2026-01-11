import React from "react";
import { Link } from "react-router-dom";

const SimpleNewsCard = ({ item, type }) => {
  // Check if categories is an array or a single string
  const categories = Array.isArray(item.category) 
    ? item.category 
    : [item.category];

  return (
    <div className="group relative">
      <div className="overflow-hidden">
        <div
          className={`${
            type === "latest" ? "h-[350px] sm:h-[500px]" : "h-[228px]"
          } w-full group-hover:scale-[1.1] transition-all duration-[1s] relative`}
        >
          <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
          
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2">
        {/* Updated category display with gap between multiple categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="px-[4px] py-[1px] rounded-sm text-[12px] bg-[#c80000] w-fit"
            >
              {category}
            </div>
          ))}
        </div>
        
        <Link to={`/news/${item.slug}`} className="text-xl">
          {item.title}
        </Link>
        <div className="flex gap-x-2 text-sm font-normal">
          <span>{item.date}</span>
          <span>{item.writerName}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsCard;