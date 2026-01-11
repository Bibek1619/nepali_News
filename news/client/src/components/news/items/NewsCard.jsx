import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewsCard = ({ news }) => {
  const imageUrl = news?.image || "https://picsum.photos/200/300";
  const link = news?.link || `/news/${news?.slug || 'detail'}`;

  return (
    <motion.div 
      className="bg-white shadow-sm rounded-md flex gap-3 p-4 hover:shadow-md transition-shadow"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative group overflow-hidden rounded-md">
        <motion.div 
          className="w-[100px] h-[80px] relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            className="w-full h-full object-cover rounded-md" 
            src={imageUrl} 
            alt={news?.title || "news image"} 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-y-1">
        {/* Category Badge */}
        {news?.category && (
          <div className="flex items-center gap-2 text-white font-semibold">
            <div className="px-2 py-1 rounded-sm text-[13px] bg-red-600 text-white">
              {news.category}
            </div>
          </div>
        )}

        {/* News Title */}
        <Link 
          to={link} 
          className="text-lg font-semibold text-gray-800 hover:text-news-red transition-colors line-clamp-2"
        >
          {news?.title || ""}
        </Link>

        {/* Meta Info (Date and Writer) */}
        {(news?.date || news?.writer) && (
          <div className="flex gap-x-2 text-xs font-normal text-gray-500">
            {news?.date && <span>{news.date}</span>}
            {news?.date && news?.writer && <span>||</span>}
            {news?.writer && <span>{news.writer}</span>}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NewsCard;
