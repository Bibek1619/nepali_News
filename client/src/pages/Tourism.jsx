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
        "https://images.unsplash.com/photo-1528471094513-ea47d1eab438?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUwMHwwfDF8c2VhcmNofDJ8fGZpbmFuY2lhbHxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
      link: "/tourism/tourism-growth",
      description: "नेपालको पर्यटन उद्योगमा वृद्धि देखिएको छ। यो वृद्धि नेपालका विभिन्न स्थलहरूको प्रचारसँग सम्बन्धित छ।",
    },
    // Add more tourism news here...
  ];

  return (
    <CategoryPageTemplate 
      title="पर्यटन" 
      description="नेपाल र विश्वका पर्यटन सम्बन्धी ताजा समाचारहरू" 
      newsItems={tourismNews} 
    />
  );
};

export default Tourism;
