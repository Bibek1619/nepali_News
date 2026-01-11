import React from "react";
import CategoryPageTemplate from "../components/layout/CategoryPageTemplate";
import newsData from "../data/newsData"; // Importing the news data

const Sports = () => {
  // Filter sports news where 'खेलकुद' is one of the categories
  const sportsNews = newsData
    .filter((item) => item.category.includes("खेलकुद"))
    .map((item) => ({
      ...item,
      category: ["खेलकुद"], // Only set category to "खेलकुद"
    }));

  return (
    <CategoryPageTemplate 
      title="खेलकुद" 
      description="नेपाल र विश्वभरका खेलकुद सम्बन्धी ताजा समाचारहरू" 
      newsData={sportsNews}  
      latestNews={sportsNews.slice(0, 3)} 
    />
  );
};

export default Sports;
