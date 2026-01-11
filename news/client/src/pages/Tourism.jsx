import React from 'react';
import CategoryPageTemplate from '../components/layout/CategoryPageTemplate';

const Tourism = () => {
  const tourismNews = [
    {
      title: "नेपालको पर्यटन उद्योगमा वृद्धि",
      category: "पर्यटन",
      date: "२०८९ फाल्गुन",
      writer: "मिनु थापा",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSNsMpgXea5NdsGhp-jlTC-T_-DhcSRCzmA&s",
      link: "/tourism/tourism-growth",
      description: "नेपालको पर्यटन उद्योगमा वृद्धि देखिएको छ। यो वृद्धि नेपालका विभिन्न स्थलहरूको प्रचारसँग सम्बन्धित छ।",
    },
    // Add more tourism news here...
  ];

  return (
    <CategoryPageTemplate 
      title="पर्यटन" 
      description="नेपाल र विश्वका पर्यटन सम्बन्धी ताजा समाचारहरू" 
      newsData={tourismNews} 
    />
  );
};

export default Tourism;
