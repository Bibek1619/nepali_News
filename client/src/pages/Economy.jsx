import React from 'react';
import CategoryPageTemplate from '../components/layout/CategoryPageTemplate';
import newsData from '../data/newsData'; // Import your news data

const Economy = () => {
  // Filter economy news where either 'अर्थ' or 'व्यापार' is in categories
  const economyNews = newsData
    .filter(item => {
      const categories = Array.isArray(item.category) ? item.category : [item.category];
      return categories.some(cat => 
        cat === "अर्थ" || 
        cat === "व्यापार" || 
        cat === "अर्थतन्त्र" ||
        cat === "अर्थव्यवस्था"
      );
    })
    .map(item => ({
      ...item,
      category: ["अर्थव्यवस्था"] // Standardize to show only economy category
    }));

  return (
    <CategoryPageTemplate 
      title="अर्थव्यवस्था" 
      description="नेपाल र विश्वका अर्थव्यवस्थासम्बन्धी ताजा समाचार, बजार विश्लेषण र आर्थिक नीतिहरू" 
      newsData={economyNews}
      latestNews={economyNews.slice(0, 3)}
    />
  );
};

export default Economy;