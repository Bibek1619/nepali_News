import React from 'react';
import CategoryPageTemplate from '../components/layout/CategoryPageTemplate';
import newsData from '../data/newsData'; // Import your news data

const Education = () => {
  // Filter education news where 'शिक्षा' is one of the categories
  const educationNews = newsData
    .filter((item) => item.category.includes("शिक्षा"))
    .map((item) => ({
      ...item,
      category: ["शिक्षा"], // Standardize to show only "शिक्षा" as category
    }));

  return (
    <CategoryPageTemplate 
      title="शिक्षा" 
      description="नेपाल र विश्वभरका शिक्षा सम्बन्धी ताजा समाचार, नीति र अनुसन्धानहरू" 
      newsData={educationNews}  // Changed from newsItems to newsData to match your template
      latestNews={educationNews.slice(0, 3)} // Shows 3 latest education news
    />
  );
};

export default Education;