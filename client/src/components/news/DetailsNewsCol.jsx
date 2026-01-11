import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";
import NewsCard from "./items/NewsCard";
import newsData from "../../data/newsData";

const DetailsNewsCol = () => {
  // Filter and modify news to show only "शिक्षा" category
  const educationNews = newsData
    .filter(item => 
      Array.isArray(item.category) 
        ? item.category.includes("शिक्षा") 
        : item.category === "शिक्षा"
    )
    .map(item => ({
      ...item,
      category: "शिक्षा" // Force single category display
    }));

  return (
    <div className="w-full flex flex-col gap-4 pl-2">
      <Title title={"शिक्षा"} />

      {/* Featured News (Big News Card) */}
      <div className="grid grid-cols-1 gap-y-6">
        {educationNews.slice(0, 1).map((news, index) => (
          <SimpleDetailsNewCard 
            key={index} 
            news={news} 
            type="details-news" 
          />
        ))}
      </div>

      {/* News List (Smaller News Cards) */}
      <div className="grid grid-cols-1 gap-y-4 mt-3">
        {educationNews.slice(1, 5).map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  );
};

export default DetailsNewsCol;