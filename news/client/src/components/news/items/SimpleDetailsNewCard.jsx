import React from "react";
import { Link } from "react-router-dom";

const SimpleDetailsNewCard = ({ news, type }) => {
  const height = type === "details-news" ? 350 : 250;

  // Color options for category badges
  const categoryColors = [
    'bg-red-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-purple-600'
  ];

  return (
    <div className="bg-white shadow rounded-md">
      {/* Image Container */}
      <div className="group relative overflow-hidden">
        <div
          style={{ height: `${height}px` }}
          className="w-full group-hover:scale-[1.1] transition-all duration-[1s]"
        >
          <img
            src={news?.image}
            alt={news?.title || "news"}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Hover Effect */}
        <div className="w-full h-full absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>

        {/* Updated Category Badges with proper spacing */}
        {news?.category && (
          <div className="absolute bottom-4 left-5 flex gap-x-3 text-white font-semibold">
            {Array.isArray(news.category) ? (
              // If category is an array (multiple categories)
              news.category.map((cat, index) => (
                <div
                  key={index}
                  className={`px-2 py-1 rounded-sm text-xs ${
                    categoryColors[index % categoryColors.length]
                  }`}
                >
                  {cat}
                </div>
              ))
            ) : (
              // If category is a string (single category)
              <div className="px-2 py-1 rounded-sm text-xs bg-red-600">
                {news.category}
              </div>
            )}
          </div>
        )}
      </div>

      {/* News Title & Meta Info */}
      <div className="p-5">
        <Link
          to={`/news/${news?.slug}`}
          className="text-[23px] font-semibold text-[rgba(22,22,22,0.8)] hover:text-[#c80000]"
        >
          {news?.title}
        </Link>
        <div className="flex gap-x-2 text-xs font-normal text-slate-600">
          <span>{news?.date}</span>
          <span>{news?.writer}</span>
        </div>

        {/* Static News Description */}
        {type === "details-news" && (
          <p className="text-lg text-slate-600 pt-3">
            {news?.description ||
              "यो समाचार नेपालमा हालै घटेको महत्वपूर्ण घटनासँग सम्बन्धित छ। यसले पाठकलाई विस्तृत जानकारी प्रदान गर्ने उद्देश्य राखेको छ।"}
          </p>
        )}
      </div>
    </div>
  );
};

export default SimpleDetailsNewCard;