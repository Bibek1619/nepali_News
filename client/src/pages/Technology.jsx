import React from "react";
import CategoryPageTemplate from "../components/layout/CategoryPageTemplate";
import newsData from "../data/newsData"; // Importing the news data

const Technology = () => {
  // Filter technology news where 'प्रविधि' is one of the categories
  const techNews = newsData
    .filter((item) => item.category.includes("प्रविधि"))
    .map((item) => ({
      ...item,
      category: ["प्रविधि"], // Only show "प्रविधि" as category
    }));

  return (
    <CategoryPageTemplate 
      title="प्रविधि" 
      description="नेपाल र विश्वका प्रविधि सम्बन्धी ताजा समाचार, अनुसन्धान र नवीनतम प्रवृत्तिहरू" 
      newsData={techNews}  
      latestNews={techNews.slice(0, 3)} 
    />
  );
};

export default Technology;