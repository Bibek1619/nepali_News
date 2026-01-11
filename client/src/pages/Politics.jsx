import React from "react";
import CategoryPageTemplate from "../components/layout/CategoryPageTemplate";
import newsData from "../data/newsData"; // Importing the news data

const Politics = () => {
  // Filter politics news where 'राजनीति' is one of the categories
  const politicsNews = newsData
    .filter((item) => item.category.includes("राजनीति"))
    .map((item) => ({
      ...item,
      category: ["राजनीति"], // Only show "राजनीति" as category
    }));

  return (
    <CategoryPageTemplate 
      title="राजनीति" 
      description="नेपाली राजनीति सम्बन्धी ताजा समाचार, विश्लेषण र भ्रमणहरू" 
      newsData={politicsNews}  
      latestNews={politicsNews.slice(0, 3)} 
    />
  );
};

export default Politics;